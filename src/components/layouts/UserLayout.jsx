import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function UserPage() {
  const location = useLocation();
  const isOrders = location.pathname.includes('/user/orders') || location.pathname === '/user';
  const isSettings = location.pathname.includes('/user/settings');
  const isInfo = location.pathname.includes('/user/info');
  
  return (
    <div className="user-page w-full flex gap-4">

      <nav className="user-nav">
        <div className="user-nav-container flex-col-start">
          <NavLink 
            to="/user/info" 
            className={({ isActive }) => `user-nav-link ${isActive || isInfo ? 'active' : ''}`}
          >
            Info
          </NavLink>
          <NavLink 
            to="/user/orders" 
            className={({ isActive }) => `user-nav-link ${isActive || isOrders ? 'active' : ''}`}
          >
            Orders
          </NavLink>
          <NavLink 
            to="/user/settings" 
            className={({ isActive }) => `user-nav-link ${isActive || isSettings ? 'active' : ''}`}
          >
            Settings
          </NavLink>
        </div>
      </nav>


      <div className="user-content">
        <Outlet />
      </div>
    </div>
  );
}
