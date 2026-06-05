import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default async function DashboardPage() {
  const user = await currentUser();

  const stats = [
    { label: "Impressions", val: "48.2K", delta: "+12.4%" },
    { label: "Clicks", val: "2,841", delta: "+8.1%" },
    { label: "Store visits", val: "612", delta: "+24%" },
    { label: "AI mentions", val: "142", delta: "+18%" },
  ];

  return (
    <div className="min-h-screen bg-ink-50/40">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="GridCast home">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-ink-600 sm:inline">
              Welcome back, {user?.firstName ?? "there"} 👋
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-ink-600">
              This is a preview. Real performance will appear after your first
              campaign goes live.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Create campaign
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-ink-500">
                {s.label}
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-2xl font-semibold tabular-nums text-ink-900">
                  {s.val}
                </div>
                <div className="text-xs font-medium text-emerald-600">
                  {s.delta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-ink-900">
                Active campaigns
              </h2>
              <span className="text-xs text-ink-500">3 running</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { name: "Weeknight specials", spend: "$4.20", reach: "1.2K" },
                { name: "Lunch radius", spend: "$3.10", reach: "892" },
                { name: "Weekend brunch", spend: "$5.80", reach: "2.1K" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-lg border border-ink-100 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-brand-500 to-brand-700" />
                    <div>
                      <div className="text-sm font-medium text-ink-900">
                        {c.name}
                      </div>
                      <div className="text-xs text-ink-500">
                        Reach today: {c.reach}
                      </div>
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
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-ink-900">
              Next best action
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Add Google Business Profile",
                "Approve weekend ad copy variant",
                "Increase budget on top-performing radius",
              ].map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 rounded-lg border border-ink-100 p-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path d="M10 2a1 1 0 0 1 .9.55l2 4 4.4.64a1 1 0 0 1 .56 1.7l-3.2 3.1.75 4.4a1 1 0 0 1-1.46 1.05L10 15.4l-3.95 2.07A1 1 0 0 1 4.6 16.4l.75-4.4-3.2-3.1a1 1 0 0 1 .56-1.7l4.4-.65 2-4A1 1 0 0 1 10 2Z" />
                    </svg>
                  </span>
                  <span className="text-ink-800">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
