export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`relative inline-flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ${
          light
            ? "bg-white"
            : "bg-gradient-to-br from-brand-600 to-brand-800"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`h-4 w-4 ${light ? "text-brand-700" : "text-white"}`}
          aria-hidden="true"
        >
          <path
            d="M3 12a9 9 0 1 0 9-9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.4" fill="currentColor" />
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`text-[17px] font-semibold tracking-tight ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        GridCast
      </span>
    </div>
  );
}
