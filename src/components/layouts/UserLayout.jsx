import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function UserPage() {
  const location = useLocation();
  const isOrders = location.pathname.includes('/user/orders') || location.pathname === '/user';
  const isInfo = location.pathname.includes('/user/info');
  
  return (
    <div className="w-full max-w-screen-md mx-auto flex flex-col md:flex-row gap-12">

      <nav className="w-full md:w-[150px] md:min-w-[150px] h-fit sticky md:top-24 bg-panel-50 rounded-br-lg md:rounded-md p-6 flex flex-row md:flex-col gap-4">
          <NavLink 
            to="/user/orders" 
            className={({ isActive }) => `btn-link ${isActive || isOrders ? 'active' : ''}`}
          >
            查看訂單
          </NavLink>
          <NavLink 
            to="/user/info" 
            className={({ isActive }) => `btn-link ${isActive || isInfo ? 'active' : ''}`}
          >
            會員資料
          </NavLink>

      </nav>


      <div className="w-full mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}
