// 用户数据（模拟数据）
export const userProfile = {
  name: "陳雅文",
  email: "yawen@example.com",
  phone: "0912-345-678"
};

export const inProgressOrders = [
  {
    id: "ORD-2025-001",
    date: "2025-01-15",
    items: [
      { name: "銀鹿鹿角蕨（中）" },
      { name: "手工柚木固定板" }
    ],
    status: "準備中",
    estimatedTime: "預計 3-5 個工作天"
  }
];

export const orderHistory = [
  {
    id: "ORD-2024-089",
    date: "2024-12-20",
    items: [
      { name: "象耳鹿角蕨" }
    ],
    status: "已完成"
  },
  {
    id: "ORD-2024-076",
    date: "2024-11-15",
    items: [
      { name: "銀鹿鹿角蕨（小）" },
      { name: "手工雪松固定板" }
    ],
    status: "已完成"
  },
  {
    id: "ORD-2024-062",
    date: "2024-10-08",
    items: [
      { name: "女王鹿角蕨" }
    ],
    status: "已完成"
  },
  {
    id: "ORD-2024-051",
    date: "2024-09-12",
    items: [
      { name: "銀鹿鹿角蕨（中）" }
    ],
    status: "已完成"
  },
  {
    id: "ORD-2024-038",
    date: "2024-08-25",
    items: [
      { name: "象耳鹿角蕨" },
      { name: "手工柚木固定板" }
    ],
    status: "已完成"
  }
];

export const addresses = [
  {
    id: "addr-001",
    isPrimary: true,
    recipient: "陳雅文",
    address: "106 台北市大安區信義路四段 123 號 5 樓",
    phone: "0912-345-678"
  },
  {
    id: "addr-002",
    isPrimary: false,
    recipient: "陳雅文",
    address: "100 台北市中正區重慶南路一段 456 號",
    phone: "0912-345-678"
  }
];


