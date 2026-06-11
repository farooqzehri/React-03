export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/30 flex items-center justify-center">
                <span className="text-amber font-display font-bold text-lg">F</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                FAROOQ <span className="text-amber">BAKES</span>
              </span>
            </div>
            <p className="text-sm text-platinum/40 max-w-xs leading-relaxed">
              Artisan baking redefined. Precision-engineered pastries for the modern connoisseur.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-white mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {['Collection', 'The Craft', 'Live Batches', 'Order Now'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-platinum/40 hover:text-amber transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-white mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {['Instagram', 'Twitter/X', 'LinkedIn', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-platinum/40 hover:text-amber transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-platinum/20">&copy; {new Date().getFullYear()} Farooq Bakes. All rights reserved.</p>
          <p className="text-xs text-platinum/20">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  )
}
