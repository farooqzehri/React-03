import { useState, useEffect } from 'react'
import { useCart } from '../context/useCart'

export default function Navbar() {
  const { totalItems, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/30 flex items-center justify-center group-hover:bg-amber/20 transition-all">
              <span className="text-amber font-display font-bold text-lg">F</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              FAROOQ <span className="text-amber">BAKES</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {['Collection', 'The Craft', 'Live Batches', 'Order'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm font-medium text-platinum tracking-widest uppercase hover:text-amber transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={toggleCart}
            className="relative glass-button rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber text-obsidian text-xs font-bold rounded-full flex items-center justify-center animate-stagger">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
