import React from 'react';

const Footer = ({ 
  headerNavItems ,
  footerNavItems ,
}) => {
  return (
    <footer className="footer 
                       w-full backdrop-blur-sm bg-background-25
                       border-t border-border-50">
      <div className="w-full max-w-screen-xl mx-auto 
                        flex-col-center-center gap-4
                        px-8 py-4 ">

        <div className="w-full flex flex-col justify-between items-center gap-8
                        md:flex-row">

          {/* EDM */}
          <div className="w-full flex-col-start gap-8">
            <div className="w-48 h-10 bg-placeholder rounded-md flex-row-center-center">
              <span>Verdant Noble (logo)</span>
            </div>

            <form className="w-full flex-col-start gap-2">
              <p>訂閱綠爵飾電子報<br />專為綠蕨愛好者提供優質的植物和相關資訊。</p>
              <div className="w-full flex-row-start">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-48 p-2 border-0 
                              shadow-[inset_0_-1px_0_0_var(--color-border)]
                              focus:shadow-[inset_0_-2px_0_0_var(--color-border)] focus:outline-none"
                />
                <button className="w-fit px-4 rounded-sm bg-card text-btn-text hover:bg-card-hover">訂閱</button>
              </div>
            </form>

          </div>

          {/* Navigation */}
          <div className="flex-row-between gap-8">
            <div className="w-[160px]">
              <p>探索綠爵飾</p>
              <ul className="">
                {headerNavItems.map((item) => (
                  <li key={item.path}><a href={item.path}>{item.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="w-[160px]">
              <p>了解更多</p>
              <ul className="">
                {footerNavItems.map((item) => (
                  <li key={item.path}><a href={item.path}>{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="text-sm text-muted">
          <p>© 2026 Verdant Noble. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
