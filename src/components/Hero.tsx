export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/60 via-brand-100/40 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-0 h-[300px] w-[400px] rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3 py-1 text-xs font-medium text-ink-700 shadow-sm backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Free trial — no credit card required
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Run your business.
            <br />
            <span className="gradient-text">
              Let GridCast handle the ads.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-600 sm:text-xl">
            An AI marketing platform that runs your ads, makes you visible to AI
            search, answers customer calls, and takes orders — at 5% the cost
            of a traditional agency.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#start"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 text-base font-medium text-white shadow-lg shadow-ink-900/10 transition-all hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/20"
            >
              Try GridCast free
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 text-base font-medium text-ink-900 shadow-sm transition-all hover:border-ink-300 hover:bg-ink-50"
            >
              Book a demo
            </a>
          </div>

          <p className="mt-4 text-sm text-ink-500">
            No credit card required · No contract · $300 ad credit · Cancel anytime
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-400/10 to-accent-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl shadow-ink-900/10">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="grid grid-cols-12 gap-0">
      {/* Sidebar */}
      <aside className="col-span-3 hidden border-r border-ink-100 bg-ink-50/50 p-5 md:block">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-600 to-brand-800" />
          <div className="h-2.5 w-20 rounded bg-ink-300" />
        </div>
        <div className="mt-6 space-y-1.5">
          {[
            { label: "Dashboard", active: true },
            { label: "Campaigns", active: false },
            { label: "AI search", active: false },
            { label: "Voice agent", active: false },
            { label: "Insights", active: false },
            { label: "Billing", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex h-8 items-center gap-2 rounded-md px-2 ${
                item.active
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-500 hover:bg-ink-100"
              }`}
            >
              <div
                className={`h-3.5 w-3.5 rounded ${
                  item.active ? "bg-brand-500" : "bg-ink-300"
                }`}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="col-span-12 p-6 md:col-span-9">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-ink-500">
              This week · Apr 8 – Apr 14
            </div>
            <div className="mt-1 text-base font-semibold text-ink-900">
              Campaign performance
            </div>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            <div className="h-7 w-16 rounded-md border border-ink-200 bg-white" />
            <div className="h-7 w-7 rounded-md border border-ink-200 bg-white" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Impressions", val: "48.2K", delta: "+12.4%", up: true },
            { label: "Clicks", val: "2,841", delta: "+8.1%", up: true },
            { label: "Store visits", val: "612", delta: "+24%", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-ink-100 bg-white p-3"
            >
              <div className="text-[10px] font-medium uppercase tracking-wide text-ink-500">
                {kpi.label}
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <div className="text-lg font-semibold tabular-nums text-ink-900">
                  {kpi.val}
                </div>
                <div
                  className={`text-[11px] font-medium ${
                    kpi.up ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {kpi.delta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-ink-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-ink-700">
              Daily impressions
            </div>
            <div className="flex items-center gap-2 text-[10px] text-ink-500">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-brand-500" /> This week
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-ink-300" /> Last week
              </span>
            </div>
          </div>
          <svg viewBox="0 0 400 120" className="mt-3 h-24 w-full">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ed1b5a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ed1b5a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 C40,80 70,70 100,60 C140,45 180,55 220,40 C260,28 300,35 340,22 L400,15 L400,120 L0,120 Z"
              fill="url(#g1)"
            />
            <path
              d="M0,90 C40,80 70,70 100,60 C140,45 180,55 220,40 C260,28 300,35 340,22 L400,15"
              stroke="#ed1b5a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,100 C40,95 70,92 100,86 C140,78 180,82 220,72 C260,65 300,70 340,60 L400,55"
              stroke="#d4d4d8"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
            />
          </svg>
        </div>

        <div className="mt-4 hidden grid-cols-2 gap-3 md:grid">
          <div className="rounded-lg border border-ink-100 bg-white p-3">
            <div className="text-[10px] font-medium uppercase tracking-wide text-ink-500">
              Top platform
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                { name: "Google Maps", v: 78 },
                { name: "Yelp", v: 54 },
                { name: "Nextdoor", v: 32 },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-20 truncate text-[11px] text-ink-700">
                    {p.name}
                  </div>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${p.v}%` }}
                    />
                  </div>
                  <div className="w-8 text-right text-[10px] tabular-nums text-ink-500">
                    {p.v}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-ink-100 bg-white p-3">
            <div className="text-[10px] font-medium uppercase tracking-wide text-ink-500">
              AI search mentions
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["ChatGPT", "Claude", "Gemini", "Perplexity"].map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-1 rounded-full bg-ink-50 px-2 py-0.5 text-[10px] font-medium text-ink-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-3 text-xl font-semibold text-ink-900">
              142 <span className="text-xs font-normal text-ink-500">this week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
