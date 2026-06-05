import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Guides", "Help center", "API", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-600">
              The AI marketing platform for local businesses. Built so you can
              run your business, not your ads.
            </p>
            <form className="mt-5 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="you@business.com"
                className="h-10 flex-1 rounded-full border border-ink-200 bg-white px-4 text-sm outline-none placeholder:text-ink-400 focus:border-ink-400"
              />
              <button
                type="button"
                className="inline-flex h-10 items-center rounded-full bg-ink-900 px-4 text-sm font-medium text-white hover:bg-ink-800"
              >
                Notify me
              </button>
            </form>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-700 transition-colors hover:text-ink-900"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} GridCast Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              All systems normal
            </span>
            <span className="text-ink-300">·</span>
            <span>Made for owners, not agencies.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
