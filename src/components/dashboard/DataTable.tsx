import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

interface Transaction {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

interface DataTableProps {
  data: Transaction[];
}

export default function DataTableComponent({ data }: DataTableProps) {
  const [sortField, setSortField] = useState<keyof Transaction | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const handleSort = (field: keyof Transaction) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow border border-gray-100 dark:border-dark-700 overflow-hidden">
      <div className="p-5 border-b border-gray-100 dark:border-dark-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-dark-900/50 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-dark-700">
            <tr>
              {['id', 'customer', 'product', 'amount', 'status'].map((f) => (
                <th key={f} onClick={() => handleSort(f as keyof Transaction)} className="px-6 py-4 font-semibold cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-dark-700">
                  <div className="flex items-center gap-1">
                    {f} <ArrowUpDown size={14} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-dark-700">
            {sortedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/50 dark:hover:bg-dark-800/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.id}</td>
                <td className="px-6 py-4">{row.customer}</td>
                <td className="px-6 py-4">{row.product}</td>
                <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-100">${row.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
                    row.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    row.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
