import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function SignInPage() {
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

      <Link
        href="/"
        className="relative mb-8 transition-opacity hover:opacity-80"
      >
        <Logo />
      </Link>

      <div className="relative">
        <SignIn
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
        New here?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-brand-600 hover:text-brand-700"
        >
          Create a free account
        </Link>
      </p>
    </div>
  );
}
