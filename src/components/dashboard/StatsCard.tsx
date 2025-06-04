import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  change?: {
    value: number;
    type: 'positive' | 'negative' | 'neutral';
  };
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  change,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn('hover:shadow-md transition-all duration-200', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {change && (
          <div className="flex items-center gap-1 mt-2">
            <div
              className={cn(
                'text-xs font-medium',
                change.type === 'positive' && 'text-emerald-500',
                change.type === 'negative' && 'text-rose-500'
              )}
            >
              {change.type === 'positive' && '+'}
              {change.type === 'negative' && '-'}
              {Math.abs(change.value)}%
            </div>
            <p className="text-xs text-muted-foreground">from last month</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}