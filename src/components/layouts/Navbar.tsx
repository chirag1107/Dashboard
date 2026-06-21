import { Search, Moon, Sun, User } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-6 py-4 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search components or records..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all w-64 text-sm"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle Theme Layout"
          >
            {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-gray-700" />}
          </button>
          
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200 dark:border-dark-600">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <User size={18} className="text-primary-500" />
            </div>
            <span className="font-medium text-sm text-gray-700 dark:text-gray-200">Chirag Patil</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
