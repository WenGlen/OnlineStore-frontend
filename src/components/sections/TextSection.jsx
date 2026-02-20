export default function TextSection({ 
  title, 
  children, 
  className = "",
  hasImage = false,
  imagePosition = "right" // "left" | "right" | "top" | "bottom"
}) {
  return (
    <section className={`text-section py-20 md:py-32 ${className}`}>
      <div className="max-w-[900px] mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d2d2d] mb-12 leading-[1.6] tracking-wide">
            {title}
          </h2>
        )}
        <div className={`text-content ${hasImage ? `flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-start` : ''}`}>
          {hasImage && (
            <div className="flex-shrink-0 w-full md:w-[300px] h-[200px] md:h-[300px] bg-[#889933]/10 rounded-[4px] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">
                🌿
              </div>
            </div>
          )}
          <div className="flex-1 prose prose-lg max-w-none">
            <div className="text-[#2d2d2d] text-base md:text-lg leading-[2.2] space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

