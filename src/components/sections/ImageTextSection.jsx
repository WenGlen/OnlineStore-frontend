export default function ImageTextSection({ 
  title,
  children,
  imageUrl,
  imagePosition = "right", // "left" | "right"
  className = ""
}) {
  return (
    <section className={`image-text-section py-20 md:py-32 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d2d2d] mb-16 leading-[1.6] tracking-wide">
            {title}
          </h2>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${imagePosition === 'left' ? 'md:grid-flow-dense' : ''}`}>
          {/* 文字内容 */}
          <div className={`text-content ${imagePosition === 'left' ? 'md:col-start-2' : ''}`}>
            <div className="text-[#2d2d2d] text-base md:text-lg leading-[2.2] space-y-6">
              {children}
            </div>
          </div>
          
          {/* 图片内容 */}
          <div className={`image-content ${imagePosition === 'left' ? 'md:col-start-1 md:row-start-1' : ''}`}>
            <div className="w-full h-[400px] md:h-[500px] bg-[#889933]/10 rounded-[4px] overflow-hidden">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title || "About"} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
                  🌿
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

