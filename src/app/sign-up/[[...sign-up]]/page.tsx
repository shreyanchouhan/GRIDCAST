import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-ink-50/50 px-4 py-12">
      <div
        className="absolute inset-0 grid-bg radial-fade"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/60 via-brand-100/40 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-0 h-[300px] w-[400px] rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <Link
        href="/"
        className="relative mb-6 transition-opacity hover:opacity-80"
      >
        <Logo />
      </Link>

      <div className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3 py-1 text-xs font-medium text-ink-700 shadow-sm backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        Free trial · no credit card required
      </div>

      <div className="relative">
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-2xl shadow-brand-900/10 border border-ink-100",
              headerTitle: "text-2xl font-semibold tracking-tight text-ink-900",
              headerSubtitle: "text-ink-600",
              socialButtonsBlockButton:
                "border border-ink-200 hover:bg-ink-50 transition-colors",
              formButtonPrimary:
                "bg-ink-900 hover:bg-ink-800 transition-colors text-white normal-case font-medium",
              footerActionLink: "text-brand-600 hover:text-brand-700",
            },
          }}
        />
      </div>

      <p className="relative mt-6 text-sm text-ink-500">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-brand-600 hover:text-brand-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
