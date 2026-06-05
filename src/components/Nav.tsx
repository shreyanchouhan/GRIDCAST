import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100/80 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden text-sm font-medium text-ink-600 hover:text-ink-900 sm:inline-block"
          >
            Book a demo
          </a>
          <a
            href="#start"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink-900 px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-ink-800 hover:shadow-md"
          >
            Try GridCast free
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08.02Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
