import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1566479179817-c0b2c3b8b3c1?w=300&h=300&fit=crop",
      title: "ODD BY chansi TRENDZ Women's Georgette Fit and Flare Maxi Dress",
      size: "M",
      price: "$25,000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      title: "Crystal Silver Princess Crown Tiaras Full Round Rhinestone Crown Hair",
      size: "Adjustable",
      price: "$10,000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
      title: "ODD BY chansi TRENDZ Women's Georgette Fit and Flare Maxi Dress",
      size: "M",
      price: "$20,000"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      title: "ODD BY chansi TRENDZ Women's Georgette Fit and Flare Maxi Dress",
      size: "M",
      price: "$30,000"
    }
  ];

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="back-arrow">←</div>
        <h1 className="page-title">Select Product</h1>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
            onClick={() => handleProductSelect(product.id)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-size">Size: {product.size}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="radio-button">
              <input 
                type="radio" 
                name="product" 
                value={product.id}
                checked={selectedProduct === product.id}
                onChange={() => handleProductSelect(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
