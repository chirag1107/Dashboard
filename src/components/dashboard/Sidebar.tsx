import { Home, ChartBar, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: ChartBar, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-dark-900 text-white flex flex-col min-h-screen shrink-0">
      <div className="p-6 border-b border-dark-800">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Enterprise AI
        </h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-500 text-white shadow-md' 
                      : 'text-gray-400 hover:bg-dark-800 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-dark-800">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white w-full transition-colors rounded-lg hover:bg-dark-800">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
