import AnalyticsCard from '../components/dashboard/AnalyticsCard';
import LineChartComponent from '../components/dashboard/LineChart';
import DataTableComponent from '../components/dashboard/DataTable';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { lineChartData, mockTransactions } from '../data/mockDashboard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">System Executive Briefing</h2>
        <p className="text-gray-500 text-sm">Real-time compilation analytical payload metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard title="Total Revenue" value="$125,000" change={12.5} icon={<DollarSign size={24} className="text-primary-500" />} />
        <AnalyticsCard title="Total Orders" value="1,240" change={8.3} icon={<ShoppingBag size={24} className="text-primary-500" />} />
        <AnalyticsCard title="Total Customers" value="3,450" change={-2.1} icon={<Users size={24} className="text-primary-500" />} />
        <AnalyticsCard title="Conversion Rate" value="3.2%" change={5.7} icon={<TrendingUp size={24} className="text-primary-500" />} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-3">
          <LineChartComponent data={lineChartData} />
        </div>
      </div>

      <DataTableComponent data={mockTransactions} />
    </div>
  );
}
