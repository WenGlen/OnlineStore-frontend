import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🌿</span>
              <span className="footer__logo-text">PLATYCERIUM</span>
            </div>
            <p className="footer__tagline">
              Join our botanical circle for awesome care tips,
              new drop alerts, and exclusive species insights.
            </p>
            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Email address"
                className="footer__input"
              />
            </div>
          </div>

          {/* Collection */}
          <div className="footer__column">
            <h4 className="footer__column-title">COLLECTION</h4>
            <ul className="footer__links">
              <li><a href="#">Shop All</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Starter Plants</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__column">
            <h4 className="footer__column-title">RESOURCES</h4>
            <ul className="footer__links">
              <li><a href="#">Care Guide</a></li>
              <li><a href="#">Species 101</a></li>
              <li><a href="#">Mounting DIY</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer__column">
            <h4 className="footer__column-title">CONNECT</h4>
            <ul className="footer__links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p>© 2024 PLATYCERIUM BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED FOR PLANT LOVERS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
