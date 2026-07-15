"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, Loader2, MessageCircle, Send, X } from "lucide-react";
import { getChatReply } from "@/lib/chatbot/reply";
import { quickPrompts } from "@/lib/chatbot/knowledge";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

type Msg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  source?: "faq" | "gemini" | "fallback";
};

const WELCOME: Msg = {
  id: "welcome",
  role: "assistant",
  text: "Hi — I’m Dioame’s portfolio assistant. Ask about experience, DSWD work, services, labs, apps, or how to get in touch. Tap a suggestion below anytime.",
  source: "faq",
};

const LINK_RE = /(https?:\/\/[^\s]+|\/resume|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

function MessageBody({ text, isUser }: { text: string; isUser: boolean }) {
  if (!text) return null;

  const lines = text.split("\n");
  const linkClass = isUser
    ? "underline decoration-white/50 underline-offset-2 hover:decoration-white"
    : "font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary";

  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        if (!line.trim()) {
          return <div key={`sp-${i}`} className="h-1.5" aria-hidden />;
        }

        const isBullet = /^[•\-\*]\s+/.test(line);
        const content = isBullet ? line.replace(/^[•\-\*]\s+/, "") : line;
        const parts = content.split(LINK_RE);

        const nodes = parts.map((part, j) => {
          if (!part) return null;
          if (/^https?:\/\//i.test(part)) {
            return (
              <a
                key={j}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {part.replace(/^https?:\/\//i, "").replace(/\/$/, "")}
              </a>
            );
          }
          if (/^\/resume$/i.test(part)) {
            return (
              <a key={j} href="/resume" className={linkClass}>
                Resume page
              </a>
            );
          }
          if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part)) {
            return (
              <a key={j} href={`mailto:${part}`} className={linkClass}>
                {part}
              </a>
            );
          }
          return <span key={j}>{part}</span>;
        });

        if (isBullet) {
          return (
            <div key={i} className="flex gap-2 pl-0.5">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-current opacity-50" />
              <span className="min-w-0">{nodes}</span>
            </div>
          );
        }

        return (
          <p key={i} className="m-0">
            {nodes}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [chipsOpen, setChipsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const chipsBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const animatedIds = useRef(new Set<string>(["welcome"]));
  const chipsOpenRef = useRef(chipsOpen);
  const skipChipsAnim = useRef(true);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const api = getGsap();
    const panel = panelRef.current;
    const chips = chipsRef.current;
    if (!api || !panel) return;

    if (prefersReducedMotion()) {
      api.gsap.set(panel, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
      return;
    }

    const { gsap } = api;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "expo.out" },
      );

      const buttons = chips?.querySelectorAll("button[data-chip]");
      if (buttons?.length) {
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            delay: 0.12,
            ease: "power2.out",
          },
        );
      }
    }, panel);

    return () => ctx.revert();
  }, [open]);

  useEffect(() => {
    if (!open) {
      skipChipsAnim.current = true;
      return;
    }

    const body = chipsBodyRef.current;
    if (!body) return;

    const toggled = chipsOpenRef.current !== chipsOpen;
    chipsOpenRef.current = chipsOpen;

    // Skip anim when panel first mounts; panel-open effect handles that entrance
    if (skipChipsAnim.current) {
      skipChipsAnim.current = false;
      body.style.height = chipsOpen ? "auto" : "0px";
      body.style.opacity = chipsOpen ? "1" : "0";
      return;
    }

    if (!toggled) return;

    const api = getGsap();
    if (prefersReducedMotion() || !api) {
      body.style.height = chipsOpen ? "auto" : "0px";
      body.style.opacity = chipsOpen ? "1" : "0";
      return;
    }

    const { gsap } = api;
    gsap.killTweensOf(body);

    if (chipsOpen) {
      gsap.set(body, { height: "auto", opacity: 1 });
      const h = body.offsetHeight;
      gsap.fromTo(
        body,
        { height: 0, opacity: 0 },
        {
          height: h,
          opacity: 1,
          duration: 0.32,
          ease: "power2.out",
          onComplete: () => gsap.set(body, { height: "auto" }),
        },
      );
      const buttons = body.querySelectorAll("button[data-chip]");
      if (buttons.length) {
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            stagger: 0.04,
            delay: 0.08,
            ease: "power2.out",
          },
        );
      }
    } else {
      gsap.to(body, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [chipsOpen, open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;

    const api = getGsap();
    if (!api || prefersReducedMotion()) return;

    const { gsap } = api;
    const nodes = el.querySelectorAll<HTMLElement>("[data-msg-id]");
    nodes.forEach((node) => {
      const id = node.dataset.msgId;
      if (!id || animatedIds.current.has(id)) return;
      if (!node.dataset.hasText) return;
      animatedIds.current.add(id);

      const fromUser = node.dataset.role === "user";
      gsap.fromTo(
        node,
        { opacity: 0, y: 14, x: fromUser ? 12 : -12 },
        { opacity: 1, y: 0, x: 0, duration: 0.4, ease: "expo.out" },
      );
    });
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
          ref={panelRef}
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
                data-msg-id={msg.id}
                data-role={msg.role}
                data-has-text={msg.text ? "1" : undefined}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-md bg-primary text-white"
                      : "rounded-bl-md border border-primary/12 bg-background text-ink"
                  }`}
                >
                  <MessageBody text={msg.text} isUser={msg.role === "user"} />
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

          <div
            ref={chipsRef}
            className="border-t border-primary/10 bg-background/70"
          >
            <button
              type="button"
              onClick={() => setChipsOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left cursor-pointer focus-ring"
              aria-expanded={chipsOpen}
              aria-controls="chat-suggestions"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                Suggestions
              </span>
              <ChevronDown
                className={`size-3.5 text-muted transition-transform duration-250 ${
                  chipsOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden
              />
            </button>
            <div
              id="chat-suggestions"
              ref={chipsBodyRef}
              className="overflow-hidden px-3"
              style={{ height: chipsOpen ? "auto" : 0 }}
            >
              <div className="flex flex-wrap gap-1.5 pb-2.5">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    data-chip
                    disabled={busy}
                    onClick={() => void send(prompt)}
                    className="rounded-full border border-primary/20 bg-surface px-2.5 py-1 text-[11px] font-medium text-ink shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:border-primary/40 hover:bg-primary/5 active:scale-[0.98] cursor-pointer focus-ring disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

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
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-200 hover:scale-105 hover:bg-primary-bright active:scale-95 cursor-pointer focus-ring disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
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
        className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(4,19,18,0.65)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary active:scale-[0.98] cursor-pointer focus-ring"
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
