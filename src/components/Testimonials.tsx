const items = [
  {
    quote:
      "I went from spending 3 hours a week tweaking Google Ads to literally zero. Bookings are up 38% and I haven't touched the dashboard in a month.",
    name: "Maya R.",
    role: "Owner, Two Birds Coffee",
    initials: "MR",
    color: "from-brand-400 to-accent-500",
  },
  {
    quote:
      "The AI search feature is the wild one. People started saying ChatGPT recommended us. We had no idea you could even do that.",
    name: "Devon K.",
    role: "Studio lead, Devon's Auto",
    initials: "DK",
    color: "from-brand-500 to-red-600",
  },
  {
    quote:
      "We were spending $2,400/mo with an agency for results worse than this. GridCast pays for itself in about a week.",
    name: "Priya S.",
    role: "Co-founder, Halo Beauty Bar",
    initials: "PS",
    color: "from-accent-400 to-red-500",
  },
  {
    quote:
      "The voice agent is unreal. It booked four reservations on a Saturday while I was on a flight. I read the transcripts and they were better than I would've done.",
    name: "Theo M.",
    role: "GM, Vine & Olive",
    initials: "TM",
    color: "from-red-400 to-brand-600",
  },
  {
    quote:
      "Setup took 7 minutes and the first call came in the next morning. I'm a contractor — I didn't even know what 'proximity bid modifier' meant.",
    name: "Carlos D.",
    role: "Owner, Diaz Roofing",
    initials: "CD",
    color: "from-accent-400 to-brand-500",
  },
  {
    quote:
      "We replaced our marketing manager with GridCast. That's not a slight on her — she literally said this was a better job than she could do.",
    name: "Lena W.",
    role: "Founder, Riverline Pilates",
    initials: "LW",
    color: "from-red-400 to-brand-700",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">Loved by owners</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Results in the first 30 days
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            From coffee shops to contractors — they swapped the agency for an
            AI.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="mb-6 break-inside-avoid rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M10 2a1 1 0 0 1 .9.55l2 4 4.4.64a1 1 0 0 1 .56 1.7l-3.2 3.1.75 4.4a1 1 0 0 1-1.46 1.05L10 15.4l-3.95 2.07A1 1 0 0 1 4.6 16.4l.75-4.4-3.2-3.1a1 1 0 0 1 .56-1.7l4.4-.65 2-4A1 1 0 0 1 10 2Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
