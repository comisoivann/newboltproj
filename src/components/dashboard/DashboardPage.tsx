import { StatsCard } from './StatsCard';
import { ChartSection } from './ChartSection';
import { RecentActivity } from './RecentActivity';
import { Users, ShoppingCart, CreditCard, Activity } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="container py-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your business.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Customers"
          value="3,245"
          description="Active users on your platform"
          icon={Users}
          change={{ value: 12.5, type: 'positive' }}
        />
        <StatsCard
          title="Total Orders"
          value="12,543"
          description="All-time orders placed"
          icon={ShoppingCart}
          change={{ value: 8.2, type: 'positive' }}
        />
        <StatsCard
          title="Revenue"
          value="$45,231"
          description="Total revenue this month"
          icon={CreditCard}
          change={{ value: 4.3, type: 'negative' }}
        />
        <StatsCard
          title="Active Now"
          value="324"
          description="Users currently active"
          icon={Activity}
        />
      </div>
      
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-12">
        <ChartSection />
        <RecentActivity />
      </div>
    </div>
  );
}