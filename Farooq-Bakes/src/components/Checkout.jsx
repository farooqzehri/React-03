import { useState } from 'react'
import { useCart } from '../context/useCart'

const STEPS = ['Details', 'Delivery', 'Payment']

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            i === current
              ? 'bg-amber text-obsidian'
              : i < current
                ? 'bg-amber/20 text-amber'
                : 'bg-white/5 text-platinum/40'
          }`}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border border-current">
              {i < current ? '✓' : i + 1}
            </span>
            <span className="hidden sm:inline">{step}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`w-8 h-[2px] rounded-full transition-colors ${
              i < current ? 'bg-amber/40' : 'bg-white/5'
            }`} />
          )}
        </div>
      ))}
    </div>
  )
}

function InputField({ label, type = 'text', placeholder, value, onChange, half }) {
  return (
    <div className={half ? 'flex-1' : 'w-full'}>
      <label className="block text-xs text-platinum/50 tracking-widest uppercase mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-obsidian/50 border border-white/10 text-white placeholder:text-platinum/20 focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/20 transition-all text-sm"
      />
    </div>
  )
}

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(0)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId] = useState(() => 'FB-' + crypto.randomUUID().substring(0, 8).toUpperCase())
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    method: 'collect',
    address: '', city: '',
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      setOrderPlaced(true)
      clearCart()
    }
  }

  if (orderPlaced) {
    return (
      <section id="order" className="py-24 lg:py-32 bg-charcoal relative">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center mx-auto mb-6 animate-glow">
            <svg className="w-10 h-10 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display font-extrabold text-3xl mb-3">Order Confirmed</h2>
          <p className="text-platinum/60 mb-2">Your artisan selection is being prepared with precision.</p>
          <p className="text-xs text-amber/60">Order #{orderId}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="order" className="py-24 lg:py-32 bg-charcoal relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber/70">Frictionless</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
            Quick <span className="text-amber">Order</span>
          </h2>
        </div>

        <div className="glass-card rounded-2xl p-8 lg:p-10">
          <StepIndicator current={step} />

          {step === 0 && (
            <div className="space-y-5 animate-fade-up">
              <InputField label="Full Name" placeholder="Your name" value={form.name} onChange={update('name')} />
              <div className="flex gap-4">
                <InputField label="Email" type="email" placeholder="email@example.com" value={form.email} onChange={update('email')} half />
                <InputField label="Phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={update('phone')} half />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5 animate-fade-up">
              <div>
                <label className="block text-xs text-platinum/50 tracking-widest uppercase mb-3">Delivery Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'collect', label: 'Click & Collect', desc: 'Ready in 15 mins' },
                    { value: 'deliver', label: 'Premium Courier', desc: 'Express delivery' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setForm({ ...form, method: opt.value })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        form.method === opt.value
                          ? 'border-amber/50 bg-amber/5'
                          : 'border-white/10 bg-obsidian/30 hover:border-white/20'
                      }`}
                    >
                      <span className="text-sm font-semibold text-white block">{opt.label}</span>
                      <span className="text-xs text-platinum/40 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
              {form.method === 'deliver' && (
                <div className="space-y-5">
                  <InputField label="Address" placeholder="Street address" value={form.address} onChange={update('address')} />
                  <InputField label="City" placeholder="City" value={form.city} onChange={update('city')} />
                </div>
              )}
              {form.method === 'collect' && (
                <div className="rounded-xl bg-obsidian/50 border border-white/5 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Farooq Bakes Atelier</p>
                      <p className="text-xs text-platinum/40">42 Artisan Lane, Craft District</p>
                    </div>
                  </div>
                  <div className="w-full h-32 rounded-lg bg-obsidian/80 border border-white/5 flex items-center justify-center">
                    <span className="text-xs text-platinum/20 tracking-widest uppercase">Map Integration</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-up">
              <InputField label="Name on Card" placeholder="Cardholder name" value={form.cardName} onChange={update('cardName')} />
              <InputField label="Card Number" placeholder="4242 4242 4242 4242" value={form.cardNumber} onChange={update('cardNumber')} />
              <div className="flex gap-4">
                <InputField label="Expiry" placeholder="MM/YY" value={form.expiry} onChange={update('expiry')} half />
                <InputField label="CVV" placeholder="•••" value={form.cvv} onChange={update('cvv')} half />
              </div>
              {items.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-obsidian/50 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-platinum/60">Order Total</span>
                    <span className="font-display font-bold text-xl text-amber">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-platinum/30 space-y-1">
                    {items.map(i => (
                      <div key={i.id} className="flex justify-between">
                        <span>{i.name} × {i.qty}</span>
                        <span>${(i.price * i.qty).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm text-platinum/40 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={handleSubmit}
              className="glass-button rounded-xl px-8 py-3 text-sm font-semibold text-white"
            >
              {step === 2 ? 'Place Order' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
