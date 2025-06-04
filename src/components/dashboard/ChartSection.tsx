import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, BarChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400, visits: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398, visits: 2210 },
  { name: 'Mar', revenue: 2000, expenses: 9800, visits: 2290 },
  { name: 'Apr', revenue: 2780, expenses: 3908, visits: 2000 },
  { name: 'May', revenue: 1890, expenses: 4800, visits: 2181 },
  { name: 'Jun', revenue: 2390, expenses: 3800, visits: 2500 },
  { name: 'Jul', revenue: 3490, expenses: 4300, visits: 2100 },
];

export function ChartSection() {
  const [period, setPeriod] = useState('last7days');
  
  return (
    <Card className="col-span-full xl:col-span-8 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>
            A visual breakdown of key business metrics
          </CardDescription>
        </div>
        <Tabs defaultValue="revenue" className="w-fit">
          <TabsList className="grid grid-cols-3 h-8">
            <TabsTrigger value="revenue" className="text-xs">Revenue</TabsTrigger>
            <TabsTrigger value="expenses" className="text-xs">Expenses</TabsTrigger>
            <TabsTrigger value="visits" className="text-xs">Visits</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-chart-1" />
              <span className="text-xs">Current</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-chart-2" />
              <span className="text-xs">Previous</span>
            </div>
          </div>
          <select 
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="h-8 rounded-md border border-input bg-background px-3 py-1 text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last90days">Last 90 days</option>
          </select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.2}
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}