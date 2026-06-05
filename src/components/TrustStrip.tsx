const platforms = [
  "Google Ads",
  "Google Maps",
  "Yelp",
  "Nextdoor",
  "Meta Ads",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-500">
          Plugs into every channel your customers use
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="flex animate-[scroll_28s_linear_infinite] gap-12">
            {[...platforms, ...platforms].map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="shrink-0 text-xl font-semibold tracking-tight text-ink-400"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
