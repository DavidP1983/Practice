// Rules

import { useEffect, useState } from 'react';

export const Repition = () => {
  const [query, setQuery] = useState('');

  const [products, setProducts] = useState([]);

  const [cartCount, setCartCount] = useState(0);
  const [cartSum, setSumCount] = useState(0);

  const handleOnAdd = (p: Product) => {
    setCartCount((prev) => prev + 1);
    setSumCount((prev) => prev + p.price);
  };

  const clear = () => {
    setCartCount(0);
    setSumCount(0);
  };

  useEffect(() => {
    fetchProducts(query).then((res) => {
      setProducts(res.items);
    });
  }, [query]);

  const filtered = products.filter((p) => p.price >= 0);

  return (
    <div>
      <div
        style={{
          fontFamily: 'sans-serif',
          maxWidth: 720,
          margin: '20px auto',
        }}>
        <h2>Shop</h2>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />

          <span>Cart: {cartCount}</span>
          <span>Sum: ${cartSum}</span>

          <button
            style={{ backgroundColor: '#808080', padding: '8px' }}
            onClick={clear}>
            Clear
          </button>
        </div>

        <div
          style={{ marginTop: 12, border: '1px solid #eee', borderRadius: 8 }}>
          {filtered &&
            filtered.map((product) => (
              <>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                  key={product.id}>
                  <div>
                    <strong>{product.name}</strong>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>
                      ${product.price}
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div
                      style={{ backgroundColor: '#808080', padding: '8px' }}
                      onClick={() => handleOnAdd(product)}>
                      Add
                    </div>
                  </div>
                </div>

                <hr />
              </>
            ))}
        </div>

        <h6>Copyrite and footer</h6>
      </div>
    </div>
  );
};
