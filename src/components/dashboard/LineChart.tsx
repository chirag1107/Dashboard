import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../common/Card';

interface DataPoint {
  month: string;
  revenue: number;
}

interface LineChartProps {
  data: DataPoint[];
}

export default function LineChartComponent({ data }: LineChartProps) {
  return (
    <Card className="h-96 flex flex-col">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Revenue Run Rate</h3>
      <div className="flex-1 w-full min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:hidden" />
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="hidden dark:block" />
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
