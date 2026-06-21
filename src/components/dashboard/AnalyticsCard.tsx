import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '../common/Card';

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export default function AnalyticsCard({ title, value, change, icon }: AnalyticsCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-primary-50 dark:bg-dark-700 rounded-lg">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-full ${
          isPositive ? 'bg-green-50 dark:bg-green-900/30 text-green-500' : 'bg-red-50 dark:bg-red-900/30 text-red-500'
        }`}>
          {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      
      <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</p>
    </Card>
  );
}
