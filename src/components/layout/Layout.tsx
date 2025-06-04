import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Header isCollapsed={isCollapsed} />
      <main 
        className={cn(
          'flex-1 pt-16 transition-all duration-300',
          isCollapsed ? 'md:pl-[80px]' : 'md:pl-[240px]'
        )}
      >
        {children}
      </main>
    </div>
  );
}