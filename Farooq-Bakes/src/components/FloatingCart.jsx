import { useCart } from '../context/useCart'

export default function FloatingCart() {
  const { items, isOpen, toggleCart, removeItem, updateQty, totalPrice, clearCart } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full bg-charcoal border-l border-white/5 flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h2 className="font-display font-bold text-xl">
              Your Cart <span className="text-amber">({items.length})</span>
            </h2>
            <button
              onClick={toggleCart}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4 text-platinum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-platinum/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-platinum/50">Your cart is empty</p>
                <p className="text-xs text-platinum/30 mt-1">Add something exquisite</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-xl bg-obsidian/50 border border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-amber mt-0.5">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-platinum hover:bg-white/10 transition-colors text-xs"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-platinum hover:bg-white/10 transition-colors text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start text-platinum/30 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-platinum/60">Subtotal</span>
                <span className="font-display font-bold text-xl text-amber">${totalPrice.toFixed(2)}</span>
              </div>
              <a
                href="#order"
                onClick={toggleCart}
                className="block w-full text-center glass-button rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
              >
                Proceed to Checkout
              </a>
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-platinum/30 hover:text-red-400 transition-colors py-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
