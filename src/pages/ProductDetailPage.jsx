import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: 'Platycerium Ridleyi',
    subtitle: 'Rare Staghorn Fern',
    price: 125.00,
    status: 'IN STOCK',
    shipsFrom: 'SHIPS FROM FLORIDA',
    description: 'A stunning epiphytic fern known for its unique shield fronds that resemble the texture of a cabbage or brain coral. This specimen is a centerpiece for any indoor jungle, thriving when mounted on organic substrates. Known for its distinct "crown" shape and upright fertile fronds.',
    care: {
      light: { icon: '☀️', label: 'Light', value: 'Bright Indirect' },
      water: { icon: '💧', label: 'Water', value: 'Weekly Soak' },
      humidity: { icon: '💦', label: 'Humidity', value: '60% - 80%' }
    },
    images: [null, null, null, null]
  };

  // 推薦商品 - Complete the Look
  const relatedProducts = [
    { id: 1, name: 'Premium Cedar Board', price: 32.00, image: null },
    { id: 2, name: 'Virgin Cork Slab', price: 18.00, image: null },
    { id: 3, name: 'Modern Acrylic Hexagon', price: 45.00, image: null },
    { id: 4, name: 'Vintage Teak Plaque', price: 38.00, image: null }
  ];

  return (
    <div className="product-detail-page">
      <Header />

      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <div className="detail-breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Epiphytic Ferns</Link>
          <span>/</span>
          <span className="detail-breadcrumb__current">Platycerium Ridleyi</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="detail-product">
        <div className="detail-product__container">
          {/* Left: Images */}
          <div className="detail-product__gallery">
            {/* Thumbnails */}
            <div className="detail-product__thumbnails">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`detail-product__thumbnail ${selectedImage === index ? 'detail-product__thumbnail--active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="detail-product__thumbnail-placeholder">
                    <span>🌿</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="detail-product__main-image">
              <div className="detail-product__image-placeholder">
                <span>🌿</span>
                <p>Product Image</p>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="detail-product__info">
            <div className="detail-product__header">
              <h1 className="detail-product__title">{product.name}</h1>
              <button className="detail-product__favorite">
                <span>💚</span>
              </button>
            </div>

            <p className="detail-product__subtitle">
              {product.subtitle} • <span className="detail-product__price">${product.price.toFixed(2)}</span>
            </p>

            {/* Status Tags */}
            <div className="detail-product__tags">
              <span className="detail-product__tag detail-product__tag--stock">
                {product.status}
              </span>
              <span className="detail-product__tag detail-product__tag--shipping">
                {product.shipsFrom}
              </span>
            </div>

            {/* Description */}
            <p className="detail-product__description">
              {product.description}
            </p>

            {/* Care Info */}
            <div className="detail-product__care">
              {Object.values(product.care).map((item, index) => (
                <div key={index} className="detail-product__care-item">
                  <span className="detail-product__care-icon">{item.icon}</span>
                  <div>
                    <p className="detail-product__care-label">{item.label}</p>
                    <p className="detail-product__care-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="detail-product__actions">
              <div className="detail-product__quantity">
                <button
                  className="detail-product__quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="detail-product__quantity-value">{quantity}</span>
                <button
                  className="detail-product__quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button variant="primary" size="lg" className="detail-product__cart-btn">
                🛒 Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete the Look Section */}
      <section className="detail-related">
        <div className="detail-related__container">
          <div className="detail-related__header">
            <div>
              <h2 className="detail-related__title">Complete the Look</h2>
              <p className="detail-related__subtitle">Suggested mounting boards for your Ridleyi</p>
            </div>
            <a href="#" className="detail-related__link">View all mounts →</a>
          </div>

          <div className="detail-related__grid">
            {relatedProducts.map(item => (
              <div key={item.id} className="detail-related__item">
                <div className="detail-related__image">
                  <div className="detail-related__image-placeholder">
                    <span>🪵</span>
                  </div>
                </div>
                <h3 className="detail-related__item-name">{item.name}</h3>
                <p className="detail-related__item-price">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
