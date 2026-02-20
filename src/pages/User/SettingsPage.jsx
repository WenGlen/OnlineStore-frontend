import { useState } from 'react';
import { inProgressOrders, orderHistory } from '../../data/userData';
import OrderItem from '../../components/user/OrderItem';

export default function SettingsPage() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="orders-page w-full">
      {/* In Progress 处理中订单 */}
      {inProgressOrders.length > 0 && (
        <section className="in-progress-orders">
          <h2 className="section-title">In Progress</h2>
          <div className="orders-list">
            {inProgressOrders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
                isInProgress={true}
              />
            ))}
          </div>
        </section>
      )}

      {/* History 历史订单 */}
      <section className="order-history">
        <h2 className="section-title">History</h2>
        <div className="orders-list">
          {orderHistory.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              isInProgress={false}
              isExpanded={expandedOrderId === order.id}
              onToggleDetails={() => toggleOrderDetails(order.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}


