
import { StatsCard } from './StatsCard';
import { ChartSection } from './ChartSection';
import { RecentActivity } from './RecentActivity';
import { ProfilesCard } from './ProfilesCard';
import { Users, ShoppingCart, CreditCard, Activity } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="py-4 md:py-8 space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Welcome back! Here's an overview of your business.
        </p>
      </div>
      
      <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
      
      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ChartSection />
        </div>
        <div className="lg:col-span-4">
          <RecentActivity />
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProfilesCard />
        <ProfilesCard />
        <ProfilesCard />
      </div>
    </div>
  );
}
