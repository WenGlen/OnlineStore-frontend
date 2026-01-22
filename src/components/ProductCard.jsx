import React from 'react';

const ProductCard = ({
  id,
  name,
  subtitle,
  price,
  image,
  badge
}) => {
  return (
    <div className="product-card">
      {/* 圖片區域 */}
      <div className="product-card__image-wrapper">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card__image"
          />
        ) : (
          <div className="product-card__placeholder">
            <span>🌿</span>
          </div>
        )}

        {/* 價格標籤 */}
        {badge && (
          <div className="product-card__badge">
            {badge}
          </div>
        )}
      </div>

      {/* 內容區域 */}
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        {subtitle && (
          <p className="product-card__subtitle">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
