import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then(res => res.json())
      .then(res => setProducts(res.data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-10">
      
      <h1 className="text-center text-4xl font-extrabold tracking-widest mb-12">
        🛍 PREMIUM PRODUCTS
      </h1>

      {loading && (
        <div className="flex justify-center mt-32">
          <div className="w-14 h-14 border-4 border-zinc-700 border-t-emerald-400 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading &&
          products.map(product => (
            <div
              key={product.id}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-semibold leading-snug">
                  {product.title}
                </h2>

                <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-emerald-400">
                  {product.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6">
                {product.description.slice(0, 90)}...
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-2xl font-bold text-emerald-400">
                  ${product.price}
                </span>

                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
