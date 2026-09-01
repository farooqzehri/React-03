import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    requestAnimationFrame(() => {
      el.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80"
          alt="Artisan bread"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber/3 rounded-full blur-[100px]" />

      <div ref={headlineRef} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/20 bg-amber/5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber">
            Artisan Collection 2026
          </span>
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
          Engineered
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber via-yellow-200 to-amber">
            to Indulge.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-platinum max-w-2xl mx-auto leading-relaxed font-light">
          Seductive flavors. Meticulous craft. Experience the future of pastry.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#collection"
            className="glass-button animate-glow rounded-full px-10 py-4 text-base font-semibold tracking-wide text-white"
          >
            Explore the Collection
          </a>
          <a
            href="#the-craft"
            className="rounded-full px-10 py-4 text-base font-medium tracking-wide text-platinum border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            The Process
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            ['48h', 'Fermentation'],
            ['220°C', 'Stone-Fired'],
            ['72', 'Layers'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-amber">{value}</div>
              <div className="text-xs text-platinum/60 tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2.5 rounded-full bg-amber animate-pulse" />
        </div>
      </div>
    </section>
  )
}
