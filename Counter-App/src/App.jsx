import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState(null);

  const trigger = (type, fn) => {
    setAnimate(type);
    fn();
    setTimeout(() => setAnimate(null), 300);
  };

  const color =
    counter > 0
      ? "text-emerald-400"
      : counter < 0
      ? "text-rose-400"
      : "text-zinc-100";

  return (
    <div
      style={{ fontFamily: "'DM Mono', monospace" }}
      className="min-h-screen bg-zinc-950 flex items-center justify-center"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Card */}
      <div className="relative z-10 w-80">
        {/* Header */}
        <div className="mb-8">
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-1">
            v1.0.0
          </p>
          <h1 className="text-zinc-100 text-2xl font-bold tracking-tight">
            COUNTER
          </h1>
          <div className="mt-3 h-px bg-gradient-to-r from-zinc-400 via-zinc-600 to-transparent" />
        </div>

        {/* Counter Display */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-6 flex flex-col items-center shadow-2xl">
          {/* Label */}
          <span className="text-zinc-600 text-xs tracking-widest uppercase mb-4">
            CURRENT VALUE
          </span>

          {/* Number */}
          <div
            className={`text-7xl font-bold tabular-nums transition-all duration-200 ${color} ${
              animate === "inc"
                ? "translate-y-[-6px] scale-110"
                : animate === "dec"
                ? "translate-y-[6px] scale-110"
                : animate === "reset"
                ? "scale-75 opacity-40"
                : "translate-y-0 scale-100"
            }`}
            style={{ transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            {counter > 0 ? `+${counter}` : counter}
          </div>

          {/* Status bar */}
          <div className="mt-6 flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                counter > 0
                  ? "bg-emerald-400"
                  : counter < 0
                  ? "bg-rose-400"
                  : "bg-zinc-500"
              }`}
            />
            <span className="text-zinc-600 text-xs tracking-widest">
              {counter > 0 ? "POSITIVE" : counter < 0 ? "NEGATIVE" : "NEUTRAL"}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-3">
          {/* Increment */}
          <button
            onClick={() => trigger("inc", () => setCounter((c) => c + 1))}
            className="flex-1 group bg-zinc-900 hover:bg-emerald-500/10 border border-zinc-700 hover:border-emerald-500/50 rounded-lg py-4 transition-all duration-150 active:scale-95"
          >
            <span className="text-zinc-400 group-hover:text-emerald-400 text-xl font-bold transition-colors">
              +
            </span>
          </button>

          {/* Decrement */}
          <button
            onClick={() => trigger("dec", () => setCounter((c) => c - 1))}
            className="flex-1 group bg-zinc-900 hover:bg-rose-500/10 border border-zinc-700 hover:border-rose-500/50 rounded-lg py-4 transition-all duration-150 active:scale-95"
          >
            <span className="text-zinc-400 group-hover:text-rose-400 text-xl font-bold transition-colors">
              −
            </span>
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={() => trigger("reset", () => setCounter(0))}
          className="w-full group bg-transparent hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-lg py-3 transition-all duration-150 active:scale-95"
        >
          <span className="text-zinc-600 group-hover:text-zinc-300 text-xs tracking-[0.25em] uppercase font-medium transition-colors">
            RESET
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-zinc-700 text-xs mt-6 tracking-widest">
          ◆ PRECISION COUNTER UNIT
        </p>
      </div>

      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>
    </div>
  );
}