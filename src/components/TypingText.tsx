"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseAfterTypeMs?: number;
  pauseAfterDeleteMs?: number;
  className?: string;
};

export function TypingText({
  phrases,
  typingSpeedMs = 70,
  deletingSpeedMs = 35,
  pauseAfterTypeMs = 1400,
  pauseAfterDeleteMs = 300,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const current = phrases[index % phrases.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeedMs
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pauseAfterTypeMs);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deletingSpeedMs
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }, pauseAfterDeleteMs);
      return () => clearTimeout(t);
    }
  }, [
    text,
    phase,
    index,
    phrases,
    typingSpeedMs,
    deletingSpeedMs,
    pauseAfterTypeMs,
    pauseAfterDeleteMs,
  ]);

  return (
    <span className={className}>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[3px] -translate-y-[0.05em] animate-[caret_1s_steps(1,end)_infinite] bg-current align-baseline"
        style={{ height: "0.95em" }}
      />
      <style>{`
        @keyframes caret {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
