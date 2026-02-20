import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function InfoPage() {
  const location = useLocation();
  const isOrders = location.pathname.includes('/user/orders') || location.pathname === '/user';
  const isSettings = location.pathname.includes('/user/settings');

  return (
    <div className="user-page w-full">
      <h1>InfoPage</h1>

    </div>
  );
}

