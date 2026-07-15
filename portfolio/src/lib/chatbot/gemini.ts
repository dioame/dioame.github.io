import { buildCompactPortfolioContext } from "./knowledge";

const MODEL = "gemini-3.5-flash";

const SYSTEM_RULES = `Portfolio assistant for Dioame Jade.
Rules: answer in 1–3 short sentences OR max 4 bullets. No filler, no preamble.
Stay on portfolio topics only. Prefer email for contact; message before calling.
If unknown, say you can only help with Dioame's portfolio.`;

const COMPACT_CONTEXT = buildCompactPortfolioContext();

export function hasGeminiKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim());
}

function requestBody(userMessage: string) {
  return {
    systemInstruction: {
      parts: [
        {
          text: `${SYSTEM_RULES}\n\nCONTEXT:\n${COMPACT_CONTEXT}`,
        },
      ],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 120,
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  };
}

function extractText(data: {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
}): string {
  return (
    data.candidates?.[0]?.content?.parts
      ?.map((p) => p.text ?? "")
      .join("")
      .trim() ?? ""
  );
}

export async function askGemini(userMessage: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim();
  if (!apiKey) throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(requestBody(userMessage)),
  });

  if (!res.ok) {
    // Retry once without thinkingConfig if the API rejects it
    if (res.status === 400) {
      return askGeminiPlain(userMessage, apiKey);
    }
    const errText = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status}: ${errText.slice(0, 200)}`);
  }

  const text = extractText(await res.json());
  if (!text) throw new Error("Empty Gemini response");
  return text;
}

async function askGeminiPlain(userMessage: string, apiKey: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
  const body = requestBody(userMessage) as {
    generationConfig: Record<string, unknown>;
  };
  delete body.generationConfig.thinkingConfig;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status}: ${errText.slice(0, 200)}`);
  }

  const text = extractText(await res.json());
  if (!text) throw new Error("Empty Gemini response");
  return text;
}

/** Stream tokens for faster perceived replies. */
export async function askGeminiStream(
  userMessage: string,
  onChunk: (partial: string) => void,
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim();
  if (!apiKey) throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(requestBody(userMessage)),
  });

  if (!res.ok || !res.body) {
    // Fall back to one-shot if streaming fails
    const text = await askGemini(userMessage);
    onChunk(text);
    return text;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let full = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const events = buffer.split("\n");
    buffer = events.pop() ?? "";

    for (const line of events) {
      if (!line.startsWith("data: ")) continue;
      const payload = line.slice(6).trim();
      if (!payload || payload === "[DONE]") continue;
      try {
        const json = JSON.parse(payload) as {
          candidates?: Array<{
            content?: { parts?: Array<{ text?: string }> };
          }>;
        };
        const piece = extractText(json);
        if (piece) {
          // Stream API often sends cumulative or deltas; append only new content
          if (piece.startsWith(full)) {
            full = piece;
          } else {
            full += piece;
          }
          onChunk(full);
        }
      } catch {
        // ignore malformed SSE chunks
      }
    }
  }

  if (!full.trim()) {
    const text = await askGemini(userMessage);
    onChunk(text);
    return text;
  }

  return full.trim();
}
