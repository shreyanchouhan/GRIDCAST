const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    body: "Share your address, hours, and what you sell. Takes about 2 minutes — we pull the rest from your public profile.",
    accent: "from-brand-400 to-brand-600",
  },
  {
    n: "02",
    title: "GridCast builds your campaigns",
    body: "Our AI writes the ad copy, sets the proximity targeting, picks the keywords, and assigns the right budget per channel.",
    accent: "from-red-400 to-brand-600",
  },
  {
    n: "03",
    title: "Watch the customers come in",
    body: "Track impressions, calls, walk-ins, and AI mentions in real time. Adjust anything with a single sentence to the assistant.",
    accent: "from-accent-400 to-red-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-ink-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">How it works</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Live in under 10 minutes
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            No agency calls. No setup fees. No contracts to sign.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${s.accent} opacity-10 transition-opacity group-hover:opacity-20`}
              />
              <div
                className={`inline-flex h-10 items-center rounded-full bg-gradient-to-br ${s.accent} px-3 text-sm font-semibold text-white`}
              >
                Step {s.n}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-ink-300 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <StatsRow />
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { v: "9 min", label: "Average time to first live ad" },
    { v: "5%", label: "Cost vs. traditional agency" },
    { v: "24/7", label: "Voice agent uptime" },
    { v: "4.9★", label: "Average customer rating" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-200 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-6 text-center">
          <div className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {s.v}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
