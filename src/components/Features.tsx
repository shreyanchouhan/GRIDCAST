"use client";

import { useState } from "react";

type FeatureKey = "ads" | "ai-search" | "voice";

const features: Record<
  FeatureKey,
  {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  }
> = {
  ads: {
    eyebrow: "Targeted ads",
    title: "Reach buyers the moment they search",
    body: "GridCast builds, runs, and optimizes campaigns across the highest-intent platforms — so you spend less to get the same store visit.",
    bullets: [
      "Mobile-first proximity targeting",
      "Auto-generated copy from your business profile",
      "Continuous bid + budget tuning",
    ],
  },
  "ai-search": {
    eyebrow: "AI search visibility",
    title: "Be the answer when AI gets asked",
    body: "When customers ask ChatGPT, Claude, Gemini, or Perplexity for a recommendation, GridCast makes sure your business gets named.",
    bullets: [
      "Structured business profile pushed to every AI",
      "Track mentions and ranking weekly",
      "Topic & query expansion that compounds over time",
    ],
  },
  voice: {
    eyebrow: "AI voice agent",
    title: "Never miss a call again",
    body: "A natural-sounding voice agent answers 24/7 — takes bookings, answers FAQs, escalates to you when it matters.",
    bullets: [
      "Picks up in under one second",
      "Books to your calendar in real time",
      "Full transcript + summary in your inbox",
    ],
  },
};

export function Features() {
  const [active, setActive] = useState<FeatureKey>("ads");
  const f = features[active];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">What you get</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            One platform. Three growth engines.
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Each one runs on its own — together they compound.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-ink-200 bg-white p-1 shadow-sm">
            {(Object.keys(features) as FeatureKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === k
                    ? "bg-ink-900 text-white"
                    : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {features[k].eyebrow}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              {f.eyebrow}
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {f.title}
            </h3>
            <p className="mt-4 text-lg text-ink-600">{f.body}</p>
            <ul className="mt-6 space-y-3">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12 15.3 5.3a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-ink-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-brand-200/40 via-brand-100/30 to-accent-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-xl">
              {active === "ads" && <AdsMock />}
              {active === "ai-search" && <AISearchMock />}
              {active === "voice" && <VoiceMock />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdsMock() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-ink-500">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Live · 4 campaigns running
      </div>
      <div className="mt-4 space-y-3">
        {[
          { name: "Weeknight specials", spend: "$4.20", reach: "1.2K", color: "from-brand-500 to-brand-700" },
          { name: "Lunch radius", spend: "$3.10", reach: "892", color: "from-emerald-500 to-emerald-700" },
          { name: "Weekend brunch", spend: "$5.80", reach: "2.1K", color: "from-amber-400 to-amber-600" },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-lg border border-ink-100 p-3"
          >
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-md bg-gradient-to-br ${c.color}`} />
              <div>
                <div className="text-sm font-medium text-ink-900">{c.name}</div>
                <div className="text-xs text-ink-500">Reach today: {c.reach}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold tabular-nums text-ink-900">
                {c.spend}
              </div>
              <div className="text-[10px] text-ink-500">today</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-gradient-to-br from-brand-50 to-white p-3 ring-1 ring-brand-100">
        <div className="flex items-center gap-2 text-xs font-medium text-brand-700">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M10 2a1 1 0 0 1 .9.55l2 4 4.4.64a1 1 0 0 1 .56 1.7l-3.2 3.1.75 4.4a1 1 0 0 1-1.46 1.05L10 15.4l-3.95 2.07A1 1 0 0 1 4.6 16.4l.75-4.4-3.2-3.1a1 1 0 0 1 .56-1.7l4.4-.65 2-4A1 1 0 0 1 10 2Z" />
          </svg>
          AI suggestion
        </div>
        <p className="mt-1 text-xs text-ink-700">
          Shift $2/day from weeknights to weekend brunch — historical conversion
          is 2.1x higher.
        </p>
      </div>
    </div>
  );
}

function AISearchMock() {
  return (
    <div className="p-6">
      <div className="rounded-lg border border-ink-100 bg-ink-50/50 p-3 text-xs">
        <div className="flex items-center gap-1.5 text-ink-500">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
          User asked Claude
        </div>
        <div className="mt-1.5 text-ink-700">
          &ldquo;Best place near me for a quiet dinner under $40?&rdquo;
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-brand-200 bg-white p-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-700" />
          <div className="text-xs font-medium text-ink-700">Claude</div>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-ink-800">
          A few good options under $40 in your area:{" "}
          <span className="rounded bg-brand-100 px-1 font-semibold text-brand-800">
            your restaurant
          </span>{" "}
          on Maple St (quiet booth seating, ~$32/person), then …
        </p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          { name: "ChatGPT", v: 84 },
          { name: "Claude", v: 91 },
          { name: "Gemini", v: 72 },
          { name: "Perplexity", v: 68 },
        ].map((s) => (
          <div key={s.name} className="rounded-md bg-ink-50 p-2 text-center">
            <div className="text-[9px] uppercase tracking-wide text-ink-500">
              {s.name}
            </div>
            <div className="mt-0.5 text-sm font-semibold tabular-nums text-ink-900">
              {s.v}%
            </div>
            <div className="mx-auto mt-1 h-0.5 w-full rounded-full bg-ink-200">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{ width: `${s.v}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-[10px] text-ink-500">
        Mention rate across leading AI assistants
      </div>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="p-6">
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className="absolute -inset-1 animate-pulse-soft rounded-full bg-brand-400/40" />
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M2.5 4.5A2.5 2.5 0 0 1 5 2h2a1 1 0 0 1 .96.74l.9 3.32a1 1 0 0 1-.4 1.05l-1.7 1.13a11 11 0 0 0 5 5l1.13-1.7a1 1 0 0 1 1.05-.4l3.32.9A1 1 0 0 1 18 13v2a2.5 2.5 0 0 1-2.5 2.5h-1A12 12 0 0 1 2.5 5.5v-1Z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-ink-900">Incoming call</div>
          <div className="text-xs text-ink-500">(415) 555-0184 · 12:42 PM</div>
          <div className="mt-3 flex items-end gap-0.5 h-8">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-brand-500/70"
                style={{
                  height: `${20 + Math.abs(Math.sin(i / 2) * 70)}%`,
                  animation: `pulse-soft ${1 + (i % 4) * 0.3}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-ink-50 px-3 py-2 text-xs text-ink-800">
            Hi, do you have a table for 4 tonight at 7?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-xs text-white">
            Yes — I can hold a booth for 4 at 7. Whose name should I put it under?
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-ink-50 px-3 py-2 text-xs text-ink-800">
            Jamie. Thanks!
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-xs text-white">
            Booked. Confirmation just went to your phone. See you at 7.
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200">
        <div className="text-xs font-medium text-emerald-800">
          Reservation booked · 7:00 PM · party of 4
        </div>
        <div className="text-[10px] text-emerald-700">added to calendar</div>
      </div>
    </div>
  );
}
