import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "./Logo";

const leftLinks = [
  { href: "#features", label: "Ads" },
  { href: "#features", label: "AI Search" },
  { href: "#features", label: "Voice AI" },
];

export async function Nav() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <div className="sticky top-4 z-50 flex w-full justify-center px-4">
      <nav
        className="relative flex h-14 w-full max-w-5xl items-center justify-between gap-2 rounded-full bg-brand-600 pl-6 pr-2 shadow-xl shadow-brand-900/20 ring-1 ring-white/10"
        aria-label="Main"
      >
        {/* Left links */}
        <ul className="hidden items-center gap-6 md:flex">
          {leftLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Centered logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-90"
          aria-label="GridCast home"
        >
          <Logo light />
        </Link>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1.5 md:ml-0">
          <a
            href="#demo"
            className="hidden h-10 items-center rounded-full px-4 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Book a demo
          </a>

          {isSignedIn ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-brand-700 shadow-sm transition-all hover:bg-brand-50"
              >
                Dashboard
              </Link>
              <div className="ml-1 mr-1">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "h-9 w-9 ring-2 ring-white/30 hover:ring-white/60 transition",
                    },
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-brand-700 shadow-sm transition-all hover:bg-brand-50"
              >
                Try GridCast free
              </Link>
              <Link
                href="/sign-in"
                className="hidden h-10 items-center rounded-full px-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
