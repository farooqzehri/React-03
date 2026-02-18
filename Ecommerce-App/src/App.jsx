import axios from "axios";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 p-6">
      

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        🛒 Ecommerce Store
      </h1>


      {loading && (
        <div className="flex justify-center items-center h-40">
          <h1 className="text-2xl font-semibold animate-pulse text-gray-600">
            Loading Products...
          </h1>
        </div>
      )}

      {!loading && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
             
              <div className="overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              
              <div className="p-5">
                <p className="text-sm uppercase text-indigo-500 font-semibold mb-1">
                  {item.category}
                </p>

                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                    Add Cart!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
