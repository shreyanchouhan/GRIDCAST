export function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/40 via-red-500/30 to-accent-400/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Try GridCast free for a month
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
              Plug in your business in 2 minutes. We&apos;ll have your first
              campaign live before you finish your coffee.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#start"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-base font-medium text-ink-900 shadow-lg transition hover:shadow-xl"
              >
                Try GridCast free
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-base font-medium text-white transition hover:bg-white/10"
              >
                Book a 15-min demo
              </a>
            </div>
            <p className="mt-4 text-xs text-ink-400">
              No credit card · $300 ad credit · Cancel any time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
