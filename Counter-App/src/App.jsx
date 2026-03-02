import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-72">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-zinc-100 text-2xl font-bold tracking-widest uppercase">
            Counter
          </h1>
          <div className="mt-2 h-px bg-gradient-to-r from-zinc-400 via-zinc-600 to-transparent" />
        </div>

        {/* Display */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 mb-6 flex flex-col items-center shadow-2xl">
          <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Value</span>
          <h1
            className={`text-7xl font-bold tabular-nums ${
              counter > 0 ? "text-emerald-400" : counter < 0 ? "text-rose-400" : "text-zinc-100"
            }`}
          >
            {counter}
          </h1>
        </div>

        {/* + and - buttons */}
        <div className="flex gap-3 mb-3">
          <button
            onClick={() => setCounter(counter + 1)}
            className="flex-1 bg-zinc-900 hover:bg-emerald-500/10 border border-zinc-700 hover:border-emerald-500/50 rounded-xl py-4 text-zinc-400 hover:text-emerald-400 text-2xl font-bold transition-all duration-150 active:scale-95"
          >
            +
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            className="flex-1 bg-zinc-900 hover:bg-rose-500/10 border border-zinc-700 hover:border-rose-500/50 rounded-xl py-4 text-zinc-400 hover:text-rose-400 text-2xl font-bold transition-all duration-150 active:scale-95"
          >
            −
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={() => setCounter(0)}
          className="w-full bg-transparent hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl py-3 text-zinc-600 hover:text-zinc-300 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-150 active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App