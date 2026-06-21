export const lineChartData = [
  { month: 'Jan', revenue: 50000 },
  { month: 'Feb', revenue: 60000 },
  { month: 'Mar', revenue: 75000 },
  { month: 'Apr', revenue: 80000 },
  { month: 'May', revenue: 95000 },
  { month: 'Jun', revenue: 110000 },
  { month: 'Jul', revenue: 125000 },
];

export const barChartData = [
  { category: 'Electronics', sales: 120000 },
  { category: 'Clothing', sales: 80000 },
  { category: 'Food', sales: 60000 },
  { category: 'Books', sales: 40000 },
  { category: 'Sports', sales: 35000 },
];

export const pieChartData = [
  { name: 'North', value: 45 },
  { name: 'South', value: 30 },
  { name: 'East', value: 15 },
  { name: 'West', value: 10 },
];

export const mockTransactions = [
  { id: 'TX1001', customer: 'Jane Doe', product: 'MacBook Pro', amount: 2499, status: 'completed' as const, date: '2026-06-18' },
  { id: 'TX1002', customer: 'Alex Smith', product: 'iPad Pro', amount: 999, status: 'pending' as const, date: '2026-06-19' },
  { id: 'TX1003', customer: 'Bob Johnson', product: 'iPhone 15', amount: 1099, status: 'failed' as const, date: '2026-06-20' },
  { id: 'TX1004', customer: 'Alice Alice', product: 'AirPods Max', amount: 549, status: 'completed' as const, date: '2026-06-21' },
];
