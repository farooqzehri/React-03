import { useState } from 'react'
import { products, categories } from '../data/products'
import { useCart } from '../context/useCart'

function ProductCard({ product }) {
  const { addItem } = useCart()

  const badgeColors = {
    Signature: 'bg-amber/20 text-amber border-amber/30',
    Limited: 'bg-red-500/20 text-red-400 border-red-500/30',
    Premium: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    New: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Seasonal: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    House: 'bg-white/10 text-white/70 border-white/20',
  }

  return (
    <div className="product-card group relative rounded-2xl overflow-hidden bg-gradient-to-b from-charcoal to-charcoal-light border border-white/5 cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

        <div className="product-overlay absolute inset-0 bg-obsidian/70 backdrop-blur-sm opacity-0 transition-opacity duration-500 flex flex-col justify-end p-5">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing) => (
                <span key={ing} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-platinum tracking-wider uppercase">
                  {ing}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-xs text-platinum/80">
              <span>{product.macros.calories} cal</span>
              <span>P {product.macros.protein}</span>
              <span>C {product.macros.carbs}</span>
              <span>F {product.macros.fat}</span>
            </div>
          </div>
        </div>

        {product.badge && (
          <span className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${badgeColors[product.badge]}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-lg text-white truncate">{product.name}</h3>
            <p className="text-sm text-platinum/60 mt-0.5">{product.tagline}</p>
          </div>
          <span className="font-display font-bold text-lg text-amber whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-platinum/40 tracking-widest uppercase">{product.category}</span>
          <button
            onClick={(e) => { e.stopPropagation(); addItem(product) }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber text-sm font-medium hover:bg-amber/20 hover:border-amber/40 transition-all duration-300 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Quick Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="collection" className="py-24 lg:py-32 bg-obsidian relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber/70">Curated Selection</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
            The Signature <span className="text-amber">Line</span>
          </h2>
          <p className="text-platinum/60 mt-4 max-w-lg mx-auto">
            Each piece is precision-engineered for maximum indulgence.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber text-obsidian'
                  : 'bg-white/5 text-platinum hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-stagger"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
