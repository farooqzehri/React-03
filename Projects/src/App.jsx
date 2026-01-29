import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomproducts")
      .then(res => res.json())
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Hello World</h1>

      {loading && <h1>Loading...</h1>}

      {!loading &&
        products.map(product => (
          <div
            key={product.id}
            style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
          >
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        ))}
    </>
  );
}

export default App;
