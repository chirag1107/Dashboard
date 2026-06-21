import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../common/Card';

interface BarChartProps {
  data: { category: string; sales: number }[];
}

export default function BarChartComponent({ data }: BarChartProps) {
  return (
    <Card className="h-96 flex flex-col">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Category Volume</h3>
      <div className="flex-1 w-full min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:hidden" />
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="hidden dark:block" />
            <XAxis dataKey="category" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
            <Bar dataKey="sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
