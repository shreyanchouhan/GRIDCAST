"use client";

import { useState } from "react";

const qa = [
  {
    q: "How long until I see results?",
    a: "Most accounts get their first impressions within an hour and meaningful conversions inside the first 7 days. Voice agents and AI search visibility tend to kick in within the first 30 days as data builds up.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "No. If you can fill out a 2-minute form about your business, you can run GridCast. The whole point is that we replace the work an agency or media buyer would do.",
  },
  {
    q: "What if I already run my own Google Ads?",
    a: "You can connect your existing account and GridCast will optimize on top of it, or rebuild from scratch — your call. Either way, you keep full ownership of the account.",
  },
  {
    q: "Will GridCast work for my industry?",
    a: "GridCast works for any local business with paying customers — restaurants, salons, contractors, auto, home services, fitness, dental, retail. If you serve a geographic area, it works.",
  },
  {
    q: "What's the contract like?",
    a: "There isn't one. Month-to-month, cancel any time, take your data with you. The first month is free.",
  },
  {
    q: "What about my ad budget?",
    a: "You set it. Most owners run $200–$1,500/mo in ad spend on top of the GridCast subscription. We'll recommend a starting budget once we know your goals.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand-600">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Common questions
          </h2>
        </div>
        <dl className="mt-12 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
          {qa.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink-900">
                      {item.q}
                    </span>
                    <span
                      className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-transform ${
                        isOpen ? "rotate-45 bg-ink-900 text-white" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-600">
                      {item.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
