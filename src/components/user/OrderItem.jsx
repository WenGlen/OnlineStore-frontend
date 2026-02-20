export default function OrderItem({ 
  order, 
  isInProgress = false, 
  isExpanded = false,
  onToggleDetails 
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="order-item">
      <div className="order-header">
        <time className="order-date" dateTime={order.date}>
          {formatDate(order.date)}
        </time>
        {!isInProgress && (
          <span className="order-id">{order.id}</span>
        )}
      </div>

      <div className="order-items">
        {order.items.map((item, index) => (
          <div key={index} className="order-item-name">
            {item.name}
          </div>
        ))}
      </div>

      <div className="order-status">
        <span className="status-text">{order.status}</span>
        {isInProgress && order.estimatedTime && (
          <span className="estimated-time">{order.estimatedTime}</span>
        )}
      </div>

      {!isInProgress && (
        <>
          <button 
            className="order-detail-link"
            onClick={onToggleDetails}
          >
            {isExpanded ? '收起詳細' : '查看詳細'}
          </button>

          {isExpanded && (
            <div className="order-details">
              <div className="detail-row">
                <span className="detail-label">訂單編號</span>
                <span className="detail-value">{order.id}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">訂單日期</span>
                <span className="detail-value">{formatDate(order.date)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">商品項目</span>
                <div className="detail-value">
                  {order.items.map((item, index) => (
                    <div key={index}>{item.name}</div>
                  ))}
                </div>
              </div>
              <div className="detail-row">
                <span className="detail-label">配送地址</span>
                <span className="detail-value">106 台北市大安區信義路四段 123 號 5 樓</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">付款方式</span>
                <span className="detail-value">信用卡</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}


