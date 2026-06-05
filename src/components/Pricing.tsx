"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    blurb: "For solo operators just getting going.",
    monthly: 49,
    yearly: 39,
    features: [
      "1 location",
      "Targeted ads on Google Maps + Yelp",
      "Basic AI search visibility",
      "Email + chat support",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    blurb: "Most popular. For owners who want it all.",
    monthly: 149,
    yearly: 119,
    features: [
      "Up to 3 locations",
      "Every platform (Maps, Yelp, Nextdoor, Meta)",
      "Full AI search visibility (4 assistants)",
      "AI voice agent — 500 mins/mo included",
      "Weekly performance reports",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    blurb: "For multi-unit operators and franchises.",
    monthly: null as number | null,
    yearly: null as number | null,
    features: [
      "Unlimited locations",
      "Custom integrations (POS, CRM, reservations)",
      "Dedicated success manager",
      "SLA + onboarding workshop",
      "Voice agent — unlimited minutes",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative bg-ink-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">Pricing</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Less than a phone bill. More than an agency.
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            First month free. No credit card required. $300 in ad credit.
            Cancel any time.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                !yearly ? "bg-ink-900 text-white" : "text-ink-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                yearly ? "bg-ink-900 text-white" : "text-ink-600"
              }`}
            >
              Yearly
              <span className="absolute -right-2 -top-2 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div id="start" className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                t.highlight
                  ? "border-2 border-brand-600 bg-white shadow-xl shadow-brand-600/10"
                  : "border border-ink-100 bg-white shadow-sm"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow">
                  Most popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-ink-900">{t.name}</h3>
              </div>
              <p className="mt-1 text-sm text-ink-500">{t.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1">
                {t.monthly === null ? (
                  <span className="text-4xl font-semibold tracking-tight text-ink-900">
                    Custom
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tight text-ink-900">
                      ${yearly ? t.yearly : t.monthly}
                    </span>
                    <span className="text-sm text-ink-500">/mo</span>
                  </>
                )}
              </div>
              {t.monthly !== null && yearly && (
                <div className="mt-1 text-xs text-emerald-600">
                  Billed ${(t.yearly! * 12).toLocaleString()} yearly
                </div>
              )}

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        t.highlight
                          ? "bg-brand-600 text-white"
                          : "bg-ink-100 text-ink-700"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-2.5 w-2.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12 15.3 5.3a1 1 0 0 1 1.4 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-ink-700">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition ${
                  t.highlight
                    ? "bg-ink-900 text-white hover:bg-ink-800"
                    : "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
