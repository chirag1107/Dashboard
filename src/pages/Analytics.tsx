import BarChartComponent from '../components/dashboard/BarChart';
import PieChartComponent from '../components/dashboard/PieChart';
import { barChartData, pieChartData } from '../data/mockDashboard';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Categorical Demographics Data</h2>
        <p className="text-gray-500 text-sm">Static architectural telemetry distribution.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartComponent data={barChartData} />
        <PieChartComponent data={pieChartData} />
      </div>
    </div>
  );
}
