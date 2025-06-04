import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoreHorizontal, UserPlus, FileText, DollarSign, Calendar, CheckCircle } from 'lucide-react';

const activityItems = [
  {
    id: 1,
    type: 'new-customer',
    title: 'New Customer',
    description: 'John Doe signed up',
    time: '2 hours ago',
    icon: UserPlus,
    user: {
      name: 'John Doe',
      avatar: 'https://github.com/shadcn.png',
      initials: 'JD',
    },
  },
  {
    id: 2,
    type: 'invoice',
    title: 'Invoice Paid',
    description: 'Invoice #3421 paid',
    time: '3 hours ago',
    icon: DollarSign,
    amount: '$450.00',
  },
  {
    id: 3,
    type: 'document',
    title: 'Document Created',
    description: 'Quarterly report created',
    time: '5 hours ago',
    icon: FileText,
    document: 'Q2 Report.pdf',
  },
  {
    id: 4,
    type: 'meeting',
    title: 'Meeting Scheduled',
    description: 'Call with Jane Smith',
    time: 'Tomorrow at 10:00 AM',
    icon: Calendar,
  },
  {
    id: 5,
    type: 'task',
    title: 'Task Completed',
    description: 'Website redesign',
    time: 'Yesterday',
    icon: CheckCircle,
  },
];

interface ActivityItemProps {
  item: typeof activityItems[number];
}

function ActivityItem({ item }: ActivityItemProps) {
  const Icon = item.icon;
  
  return (
    <div className="flex items-start gap-4 rounded-lg border p-3 shadow-sm">
      <div className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        item.type === 'new-customer' && "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
        item.type === 'invoice' && "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
        item.type === 'document' && "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
        item.type === 'meeting' && "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
        item.type === 'task' && "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
      )}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{item.title}</p>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="flex items-center gap-2 pt-1">
          {item.user && (
            <Avatar className="h-6 w-6">
              <AvatarImage src={item.user.avatar} alt={item.user.name} />
              <AvatarFallback>{item.user.initials}</AvatarFallback>
            </Avatar>
          )}
          <span className="text-xs text-muted-foreground">{item.time}</span>
          {item.amount && (
            <span className="ml-auto text-xs font-medium">{item.amount}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function RecentActivity() {
  return (
    <Card className="col-span-full xl:col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Recent transactions and activities</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {activityItems.map((item) => (
          <ActivityItem key={item.id} item={item} />
        ))}
        <Button variant="outline" className="w-full mt-2">View All Activity</Button>
      </CardContent>
    </Card>
  );
}