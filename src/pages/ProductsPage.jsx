import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCardList from '../components/ProductCardList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popularity');

  // 篩選狀態
  const [filters, setFilters] = useState({
    speciesType: [],
    lightLevel: [],
    difficulty: []
  });

  const categories = [
    { id: 'all', label: 'All Species' },
    { id: 'rare', label: 'Rare Finds' },
    { id: 'beginner', label: 'Beginner Friendly' },
    { id: 'new', label: 'New Arrivals' }
  ];

  const filterOptions = {
    speciesType: [
      { id: 'bifurcatum', label: 'P. bifurcatum' },
      { id: 'ridleyi', label: 'P. ridleyi' },
      { id: 'grande', label: 'P. grande' },
      { id: 'coronarium', label: 'P. coronarium' }
    ],
    lightLevel: [
      { id: 'bright', label: 'Bright Indirect' },
      { id: 'partial', label: 'Partial Shade' }
    ],
    difficulty: [
      { id: 'easy', label: 'Easy' },
      { id: 'intermediate', label: 'Intermediate' },
      { id: 'expert', label: 'Expert' }
    ]
  };

  // 產品列表
  const products = [
    {
      id: 1,
      name: 'Platycerium Ridleyi',
      subtitle: "Collector's Edition",
      price: 145.00,
      image: null,
      tag: 'RARE'
    },
    {
      id: 2,
      name: 'P. Bifurcatum',
      subtitle: '"Netherlands"',
      price: 48.00,
      image: null,
      tagColor: 'green',
      tagText: 'Beginner Friendly'
    },
    {
      id: 3,
      name: 'Platycerium Grande',
      subtitle: 'Large Specimen',
      price: 210.00,
      image: null
    },
    {
      id: 4,
      name: 'P. Coronarium',
      subtitle: 'Pendulous Fronds',
      price: 85.00,
      image: null,
      tag: 'NEW'
    },
    {
      id: 5,
      name: 'P. Superbum',
      subtitle: 'Easy Maintenance',
      price: 62.00,
      image: null
    },
    {
      id: 6,
      name: "P. Alcicorne 'African'",
      subtitle: 'Compact Variety',
      price: 55.00,
      image: null
    }
  ];

  const totalResults = 12;
  const totalPages = 3;

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      speciesType: [],
      lightLevel: [],
      difficulty: []
    });
  };

  return (
    <div className="collection-page">
      <Header />

      {/* Breadcrumb */}
      <div className="collection-breadcrumb">
        <div className="collection-breadcrumb__container">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Shop</a>
          <span>/</span>
          <span className="collection-breadcrumb__current">Platycerium</span>
        </div>
      </div>

      {/* Hero */}
      <section className="collection-hero">
        <div className="collection-hero__container">
          <h1 className="collection-hero__title">The Platycerium Collection</h1>
          <p className="collection-hero__description">
            Discover our curated selection of epiphytic ferns. From the majestic Grande
            to the delicate Ridleyi, find the perfect architectural plant for your space.
          </p>

          {/* Category Tabs */}
          <div className="collection-hero__tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`collection-hero__tab ${activeCategory === cat.id ? 'collection-hero__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="collection-content">
        <div className="collection-content__container">
          {/* Sidebar Filters */}
          <aside className="collection-filters">
            <div className="collection-filters__header">
              <h3 className="collection-filters__title">Filters</h3>
              <button className="collection-filters__clear" onClick={clearFilters}>
                CLEAR ALL
              </button>
            </div>

            {/* Species Type */}
            <div className="collection-filters__group">
              <h4 className="collection-filters__group-title">
                <span>▼</span> SPECIES TYPE
              </h4>
              <div className="collection-filters__options">
                {filterOptions.speciesType.map(option => (
                  <label key={option.id} className="collection-filters__option">
                    <input
                      type="checkbox"
                      checked={filters.speciesType.includes(option.id)}
                      onChange={() => handleFilterChange('speciesType', option.id)}
                    />
                    <span className="collection-filters__checkbox"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Light Level */}
            <div className="collection-filters__group">
              <h4 className="collection-filters__group-title">
                <span>▼</span> LIGHT LEVEL
              </h4>
              <div className="collection-filters__options">
                {filterOptions.lightLevel.map(option => (
                  <label key={option.id} className="collection-filters__option">
                    <input
                      type="checkbox"
                      checked={filters.lightLevel.includes(option.id)}
                      onChange={() => handleFilterChange('lightLevel', option.id)}
                    />
                    <span className="collection-filters__checkbox"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="collection-filters__group">
              <h4 className="collection-filters__group-title">
                <span>▼</span> DIFFICULTY
              </h4>
              <div className="collection-filters__options">
                {filterOptions.difficulty.map(option => (
                  <label key={option.id} className="collection-filters__option">
                    <input
                      type="checkbox"
                      checked={filters.difficulty.includes(option.id)}
                      onChange={() => handleFilterChange('difficulty', option.id)}
                    />
                    <span className="collection-filters__checkbox"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="collection-products">
            {/* Results Header */}
            <div className="collection-products__header">
              <span className="collection-products__count">
                Showing {totalResults} results
              </span>
              <div className="collection-products__sort">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="collection-products__select"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="collection-products__grid">
              {products.map(product => (
                <ProductCardList key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
