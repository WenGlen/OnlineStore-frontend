import React from 'react';

/**
 * 產品卡片組件 - 列表頁版本 (長方形圖片)
 */
const ProductCardList = ({
  id,
  name,
  subtitle,
  price,
  image,
  tag,
  tagColor = 'orange',
  tagText
}) => {
  const displayTag = tagText || tag;
  const actualTagColor = tagText ? 'green' : tagColor;

  return (
    <div className="product-card-list">
      {/* 圖片區域 */}
      <div className="product-card-list__image-wrapper">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card-list__image"
          />
        ) : (
          <div className="product-card-list__placeholder">
            <span>🌿</span>
          </div>
        )}

        {/* 標籤 */}
        {displayTag && (
          <div className={`product-card-list__tag product-card-list__tag--${actualTagColor}`}>
            {displayTag}
          </div>
        )}
      </div>

      {/* 內容區域 */}
      <div className="product-card-list__content">
        <h3 className="product-card-list__name">{name}</h3>
        <div className="product-card-list__meta">
          {subtitle && (
            <span className="product-card-list__subtitle">{subtitle}</span>
          )}
          <span className="product-card-list__price">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;
