import { Link } from 'react-router-dom';

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section className="featured-article">
      <div className="featured-article-image">
        {article.cover_image?.src ? (
          <img 
            src={article.cover_image.src} 
            alt={article.cover_image.alt || article.title}
          />
        ) : (
          <div className="featured-article-placeholder">
            <span>🌿</span>
          </div>
        )}
      </div>
      <div className="featured-article-content">
        <span className="featured-article-label">精選故事</span>
        <h2 className="featured-article-title">{article.title}</h2>
        <p className="featured-article-excerpt">{article.excerpt}</p>
        <Link to={`/articles/${article.slug}`} className="featured-article-button">
          閱讀文章 →
        </Link>
      </div>
    </section>
  );
}

