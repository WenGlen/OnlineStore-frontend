import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';


const HomePage = () => {
  // 特色物種數據
  const featuredSpecies = [
    {
      id: 1,
      name: 'Platycerium Ridleyi',
      subtitle: 'RIDLEY\'S STAGHORN',
      price: 89,
      image: null,
      badge: '$89'
    },
    {
      id: 2,
      name: 'Platycerium Grande',
      subtitle: 'REGAL ELKHORN FERN',
      price: 145,
      image: null,
      badge: '$145'
    },
    {
      id: 3,
      name: 'Platycerium Superbum',
      subtitle: 'STAGHORN FERN',
      price: 95,
      image: null,
      badge: '$95'
    },
    {
      id: 4,
      name: 'Platycerium Coronarium',
      subtitle: 'CROWN STAGHORN',
      price: 210,
      image: null,
      badge: '$210'
    }
  ];

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          {/* Left Image */}
          <div className="hero__image">
            <div className="hero__image-placeholder">
              <span>🌿</span>
              <p>Hero Plant Image</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero__content">
            <span className="hero__label">CURATED COLLECTION 2024</span>
            <h1 className="hero__title">
              Living Art for<br />
              <span className="hero__title--accent">Modern Spaces</span>
            </h1>
            <p className="hero__description">
              Transform your walls into a vertical garden with our
              rare, hand-mounted Staghorn ferns. Sustainably
              grown and meticulously curated.
            </p>
            <div className="hero__buttons">
              <Button variant="primary" size="lg">
                Explore New Arrivals
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="featured__container">
          <div className="featured__header">
            <div>
              <h2 className="featured__title">Featured Species</h2>
              <p className="featured__subtitle">Our curated selection of healthy, vibrant ferns</p>
            </div>
            <a href="#" className="featured__link">
              View All →
            </a>
          </div>

          <div className="featured__grid">
            {featuredSpecies.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Greenhouse Section */}
      <section className="greenhouse">
        <div className="greenhouse__container">
          <div className="greenhouse__content">
            <h2 className="greenhouse__title">
              Grown with<br />
              Intention at<br />
              <span className="greenhouse__title--accent">Our Greenhouse</span>
            </h2>
            <p className="greenhouse__description">
              Our journey began with a single Ridleyi. Today, we
              manage a sustainable ecosystem dedicated to the
              preservation and cultivation of exotic staghorn ferns.
              Every plant is more than just merchandise—it's a living
              sculpture nurtured for years before reaching your
              home.
            </p>
            <Button variant="dark" size="md">
              Our Sustainable Process →
            </Button>
          </div>
          <div className="greenhouse__images">
            <div className="greenhouse__image greenhouse__image--main">
              <span>🌿</span>
              <p>Greenhouse Image</p>
            </div>
            <div className="greenhouse__image greenhouse__image--secondary">
              <span>👨‍🌾</span>
              <p>Gardener Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <div className="features__item">
            <div className="features__icon">🌱</div>
            <h3 className="features__title">Organic Methods</h3>
            <p className="features__description">
              No harsh chemicals. We use beneficial
              insects and organic fertilizers to ensure the
              healthiest ferns possible.
            </p>
          </div>
          <div className="features__item">
            <div className="features__icon">📚</div>
            <h3 className="features__title">Custom Mounting</h3>
            <p className="features__description">
              Each mounting board is hand-crafted from
              reclaimed teak or cedar, ensuring a natural
              and eco-friendly base.
            </p>
          </div>
          <div className="features__item">
            <div className="features__icon">📦</div>
            <h3 className="features__title">Stress-Free Shipping</h3>
            <p className="features__description">
              Our customized crates maintain the perfect humidity
              levels to deliver healthy ferns, guaranteed across
              the globe, year-round.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
