import { askGeminiStream, hasGeminiKey } from "./gemini";
import { matchFaq } from "./knowledge";

export type ChatReply = {
  text: string;
  source: "faq" | "gemini" | "fallback";
};

export async function getChatReply(
  userMessage: string,
  onStream?: (partial: string) => void,
): Promise<ChatReply> {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return {
      text: "Ask about Dioame’s experience, services, projects, or contact.",
      source: "fallback",
    };
  }

  const faq = matchFaq(trimmed);
  if (faq) {
    return { text: faq.answer, source: "faq" };
  }

  if (hasGeminiKey()) {
    try {
      const text = await askGeminiStream(trimmed, (partial) => {
        onStream?.(partial);
      });
      return { text, source: "gemini" };
    } catch {
      return {
        text: "Couldn’t reach the assistant right now. Try “What services do you offer?” or email dioamejade.online@gmail.com.",
        source: "fallback",
      };
    }
  }

  return {
    text: "No preset answer for that. Try services, stack, projects, or contact — or set NEXT_PUBLIC_GEMINI_API_KEY in portfolio/.env.local.",
    source: "fallback",
  };
}
