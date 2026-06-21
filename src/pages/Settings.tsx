import { Card } from '../components/common/Card';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">System Adjustments</h2>
        <p className="text-gray-500 text-sm">Configure core application states.</p>
      </div>
      <Card>
        <p className="text-sm text-gray-600 dark:text-gray-400">Settings panel boilerplate. Ready for state integration schemas.</p>
      </Card>
    </div>
  );
}
