import { useState, useEffect } from 'react'
import { batchSchedule } from '../data/products'

function CountdownTimer() {
  const [seconds, setSeconds] = useState(14 * 60 + 22)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => (s <= 0 ? 48 * 60 : s - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="text-center">
      <p className="text-xs text-platinum/50 tracking-[0.3em] uppercase mb-3">Next Batch Ready In</p>
      <div className="flex items-center justify-center gap-3">
        <div className="glass-card rounded-xl px-5 py-3 min-w-[72px]">
          <span className="font-display font-bold text-3xl text-amber">{String(mins).padStart(2, '0')}</span>
          <p className="text-[10px] text-platinum/40 tracking-widest uppercase mt-0.5">Min</p>
        </div>
        <span className="text-amber text-2xl font-bold animate-pulse">:</span>
        <div className="glass-card rounded-xl px-5 py-3 min-w-[72px]">
          <span className="font-display font-bold text-3xl text-amber">{String(secs).padStart(2, '0')}</span>
          <p className="text-[10px] text-platinum/40 tracking-widest uppercase mt-0.5">Sec</p>
        </div>
      </div>
    </div>
  )
}

function BatchRow({ batch }) {
  const statusStyles = {
    ready: { dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]', text: 'text-emerald-400', label: 'Ready' },
    baking: { dot: 'bg-amber animate-pulse shadow-[0_0_10px_rgba(229,169,60,0.5)]', text: 'text-amber', label: 'In Oven' },
    upcoming: { dot: 'bg-platinum/30', text: 'text-platinum/50', label: 'Upcoming' },
  }
  const style = statusStyles[batch.status]

  return (
    <div className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${style.dot}`} />
        <span className="text-sm text-white font-medium">{batch.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-platinum/40 font-mono">{batch.time}</span>
        <span className={`text-xs font-medium tracking-wider uppercase ${style.text}`}>{style.label}</span>
      </div>
    </div>
  )
}

export default function LiveBatches() {
  return (
    <section id="live-batches" className="py-24 lg:py-32 bg-obsidian relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber/70">Real-Time</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
            Live <span className="text-amber">Dashboard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 animate-glow">
            <CountdownTimer />
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-platinum/50 tracking-widest uppercase">Current Batch</span>
                <span className="text-xs text-amber">Truffle Sourdough</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-amber to-yellow-300 transition-all duration-1000" style={{ width: '68%' }} />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-platinum/30">Proofing Complete</span>
                <span className="text-[10px] text-amber/60">68%</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg">Today&apos;s Schedule</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400">Live</span>
              </div>
            </div>
            <div>
              {batchSchedule.map((batch) => (
                <BatchRow key={batch.name} batch={batch} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
