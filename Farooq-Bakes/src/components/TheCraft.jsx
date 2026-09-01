import { useState, useEffect, useRef } from 'react'
import { craftSteps } from '../data/products'

export default function TheCraft() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const scrollInSection = -rect.top
      const progress = Math.max(0, Math.min(1, scrollInSection / (sectionHeight - window.innerHeight)))
      const step = Math.min(craftSteps.length - 1, Math.floor(progress * craftSteps.length))
      setActiveStep(step)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="the-craft"
      ref={sectionRef}
      className="relative bg-charcoal"
      style={{ minHeight: `${craftSteps.length * 100}vh` }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="sticky top-0 h-screen flex overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 relative z-10">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber/70 mb-4">The Process</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-12">
            The <span className="text-amber">Craft</span>
          </h2>

          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5" />

            {craftSteps.map((step, i) => (
              <div
                key={step.id}
                className={`relative pl-10 pb-10 transition-all duration-500 cursor-pointer ${
                  i === activeStep ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <div
                  className={`timeline-dot absolute left-0 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    i === activeStep
                      ? 'bg-amber border-amber shadow-[0_0_20px_rgba(229,169,60,0.5)]'
                      : i < activeStep
                        ? 'bg-amber/30 border-amber/30'
                        : 'bg-transparent border-white/20'
                  }`}
                />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-amber/60 font-mono tracking-wider">{step.time}</span>
                  <span className="text-xs text-white/20">—</span>
                  <h3 className="font-display font-bold text-xl text-white">{step.title}</h3>
                </div>

                {i === activeStep && (
                  <div className="animate-fade-up">
                    <p className="text-platinum/70 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber/5 border border-amber/10">
                      <div className="w-1 h-1 rounded-full bg-amber" />
                      <span className="text-xs text-amber/80">{step.detail}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-1/2 relative overflow-hidden">
          {craftSteps.map((step, i) => (
            <div
              key={step.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === activeStep ? 1 : 0 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-charcoal/30 to-charcoal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
