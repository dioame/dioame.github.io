import {
  Bot,
  Briefcase,
  Cloud,
  CreditCard,
  KeyRound,
  Plug,
  Radio,
  Rocket,
  Settings2,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { capabilities } from "@/lib/content";

const icons = {
  briefcase: Briefcase,
  cogs: Settings2,
  mobile: Smartphone,
  rocket: Rocket,
  cloud: Cloud,
  bot: Bot,
  card: CreditCard,
  sparkles: Sparkles,
  plug: Plug,
  radio: Radio,
  key: KeyRound,
  zap: Zap,
};

export default function Capabilities() {
  return (
    <section id="experience" className="atmosphere noise py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal-up max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            <span className="line-mask">
              <span>What I bring</span>
            </span>
            <span className="line-mask mt-1 block">
              <span>to a project</span>
            </span>
          </h2>
        </div>

        <div
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-stagger
        >
          {capabilities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="stagger-item bento group p-5 cursor-default"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
