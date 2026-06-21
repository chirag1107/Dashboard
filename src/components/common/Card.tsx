import { ReactNode } from 'react';
import { cn } from '../../utils/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-white dark:bg-dark-800 rounded-lg shadow p-6 border border-gray-100 dark:border-dark-700", className)}>
      {children}
    </div>
  );
}
