"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Loader2, MessageCircle, Send, X } from "lucide-react";
import { getChatReply } from "@/lib/chatbot/reply";
import { quickPrompts } from "@/lib/chatbot/knowledge";

type Msg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  source?: "faq" | "gemini" | "fallback";
};

const WELCOME: Msg = {
  id: "welcome",
  role: "assistant",
  text: "Hi — I’m Dioame’s portfolio assistant. Ask about services, stack, labs, apps, or how to get in touch. Tap a suggestion below to start.",
  source: "faq",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, busy, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const userMsg: Msg = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setBusy(true);

    const assistantId = `a-${Date.now()}`;
    setMessages((m) => [
      ...m,
      { id: assistantId, role: "assistant", text: "", source: "faq" },
    ]);

    try {
      const reply = await getChatReply(trimmed, (partial) => {
        setMessages((m) =>
          m.map((msg) =>
            msg.id === assistantId
              ? { ...msg, text: partial, source: "gemini" }
              : msg,
          ),
        );
      });
      setMessages((m) =>
        m.map((msg) =>
          msg.id === assistantId
            ? { ...msg, text: reply.text, source: reply.source }
            : msg,
        ),
      );
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div
          className="flex h-[min(560px,72vh)] w-[min(100vw-1.5rem,380px)] flex-col overflow-hidden rounded-3xl border border-primary/20 bg-surface shadow-[0_28px_80px_-24px_rgba(4,19,18,0.55)]"
          role="dialog"
          aria-label="Portfolio chatbot"
        >
          <header className="flex items-center justify-between gap-3 bg-primary-deep px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary-bright/20 text-brass">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold">Ask Dioame</p>
                <p className="text-[11px] text-white/60">Portfolio assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 cursor-pointer focus-ring"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </header>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "border border-primary/12 bg-background text-ink"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {busy && !messages[messages.length - 1]?.text ? (
              <div className="flex items-center gap-2 px-1 text-sm text-muted">
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Replying…
              </div>
            ) : null}
          </div>

          {messages.length <= 2 ? (
            <div className="flex flex-wrap gap-1.5 border-t border-primary/10 px-3 py-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={busy}
                  onClick={() => void send(prompt)}
                  className="rounded-full border border-primary/20 bg-background px-2.5 py-1 text-[11px] font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer focus-ring disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-primary/10 bg-surface p-3"
          >
            <label htmlFor="chatbot-input" className="sr-only">
              Message
            </label>
            <input
              id="chatbot-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Dioame…"
              disabled={busy}
              className="min-w-0 flex-1 rounded-full border border-primary/15 bg-background px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-bright cursor-pointer focus-ring disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(4,19,18,0.65)] transition-colors hover:bg-primary cursor-pointer focus-ring"
        aria-expanded={open}
        aria-label={open ? "Close portfolio chat" : "Open portfolio chat"}
      >
        <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-primary-bright/20 text-brass">
          <MessageCircle className="size-4" aria-hidden />
          <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-primary-bright ring-2 ring-primary-deep" />
        </span>
        <span className="hidden sm:inline">{open ? "Close" : "Ask Dioame"}</span>
      </button>
    </div>
  );
}
