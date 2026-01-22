import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <div className="header__logo-icon">
            <span>🌿</span>
          </div>
          <span className="header__logo-text">PLATYCERIUM</span>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <a href="#" className="header__nav-link">Shop</a>
          <a href="#" className="header__nav-link">Species</a>
          <a href="#" className="header__nav-link">Care Guide</a>
          <a href="#" className="header__nav-link">Journal</a>
        </nav>

        {/* Search */}
        <div className="header__search">
          <span className="header__search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search species..."
            className="header__search-input"
          />
        </div>

        {/* Actions */}
        <div className="header__actions">
          <button className="header__action-btn">
            <span>❤️</span>
          </button>
          <button className="header__action-btn header__cart">
            <span>🛒</span>
            <span className="header__cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
