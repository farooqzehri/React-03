import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import TheCraft from './components/TheCraft'
import LiveBatches from './components/LiveBatches'
import Checkout from './components/Checkout'
import FloatingCart from './components/FloatingCart'
import Footer from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-obsidian text-white font-body">
        <Navbar />
        <Hero />
        <ProductGrid />
        <TheCraft />
        <LiveBatches />
        <Checkout />
        <FloatingCart />
        <Footer />
      </div>
    </CartProvider>
  )
}
