export default function ProductCard(
    product,
    page, 
) {
    return (
        <div className="product-card
                        w-full flex-col-start gap-2 hover:translate-y-[-6px] transition-all duration-200">
          {/* 圖片區域 */}
          <div className={`relative
                           ${ page === "home" ? `h-[200px] w-[200px]` : 'w-full' }    
                          aspect-square rounded-md overflow-hidden`}>

            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-md flex items-center justify-center text-gray-500">
                <span>🌿</span>
              </div>
            )}
    
          </div>
    
          {/* 內容區域 */}
          <div className="w-full flex-col-start gap-2">
            <h3 className="text-md font-bold text-textDefaultColor">{product.title}</h3>
            <div className="flex-row-between-center">

                {product.sub_title ? (
                  <span className="text-sm text-secondary">{product.sub_title}</span>
                ):(<div/>)}
                <div className="flex-row-end-end gap-2 text-2xs items-baseline">
                {product.price != product.origin_price && page === "products"&& (
                  <p className="text-muted line-through">NT${product.origin_price}</p>
                )}
                <p className="text-primary font-bold">NT$<span className="text-sm">{product.price}</span></p>
              </div>
            </div>
          </div>

        </div>
      );
}


