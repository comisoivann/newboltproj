import { Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  Mail,
  AlertCircle,
  LogOut,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const mainNavItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
    label: '6',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
    label: 'New',
  },
  {
    title: 'Customers',
    icon: Users,
    href: '/customers',
  },
  {
    title: 'Help Center',
    icon: HelpCircle,
    href: '/help',
  },
  {
    title: 'Inbox',
    icon: Mail,
    href: '/inbox',
    label: '12',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

const otherNavItems = [
  {
    title: 'Support',
    icon: AlertCircle,
    href: '/support',
  },
  {
    title: 'Log Out',
    icon: LogOut,
    href: '/logout',
  },
];

export function Sidebar({ className, isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed left-2 top-2 z-50 h-10 w-10"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <MobileSidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          'hidden md:flex border-r bg-background h-screen flex-col transition-all duration-300 fixed left-0 top-0 z-20',
          isCollapsed ? 'w-[80px]' : 'w-[240px]',
          className
        )}
      >
        <div className={cn('py-4 flex items-center justify-between px-4')}>
          <div className={cn('flex items-center gap-2')}>
            {!isCollapsed && (
              <div className="font-bold text-xl transition-all duration-300 opacity-0 animate-in fade-in-0 delay-200" 
                   style={{ opacity: isCollapsed ? 0 : 1 }}>
                Dashboard
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                isCollapsed ? 'rotate-0' : 'rotate-180'
              )}
            />
          </Button>
        </div>

        <ScrollArea className="flex-1 pt-4">
          <div className="flex flex-col gap-1 px-2">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary hover:bg-accent',
                  !isCollapsed ? 'justify-start' : 'justify-center'
                )}
              >
                <item.icon className={cn('h-5 w-5')} />
                {!isCollapsed && (
                  <span 
                    className="transition-all duration-300 opacity-0"
                    style={{ 
                      opacity: isCollapsed ? 0 : 1,
                      transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)',
                      transitionDelay: isCollapsed ? '0ms' : '200ms'
                    }}
                  >
                    {item.title}
                  </span>
                )}
                {!isCollapsed && item.label && (
                  <span 
                    className="ml-auto text-xs bg-primary text-primary-foreground rounded-full py-0.5 px-2 transition-all duration-300 opacity-0"
                    style={{ 
                      opacity: isCollapsed ? 0 : 1,
                      transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)',
                      transitionDelay: isCollapsed ? '0ms' : '250ms'
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col gap-1 px-2">
            {otherNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary hover:bg-accent',
                  !isCollapsed ? 'justify-start' : 'justify-center'
                )}
              >
                <item.icon className={cn('h-5 w-5')} />
                {!isCollapsed && (
                  <span 
                    className="transition-all duration-300 opacity-0"
                    style={{ 
                      opacity: isCollapsed ? 0 : 1,
                      transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)',
                      transitionDelay: isCollapsed ? '0ms' : '200ms'
                    }}
                  >
                    {item.title}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-4 w-4" />
            </div>
            {!isCollapsed && (
              <div 
                className="flex flex-col gap-1 transition-all duration-300 opacity-0"
                style={{ 
                  opacity: isCollapsed ? 0 : 1,
                  transform: isCollapsed ? 'translateX(-10px)' : 'translateX(0)',
                  transitionDelay: isCollapsed ? '0ms' : '200ms'
                }}
              >
                <p className="text-sm font-medium">Acme Inc.</p>
                <p className="text-xs text-muted-foreground">Pro Plan</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileSidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="py-4 px-6 border-b">
        <div className="font-bold text-xl">Dashboard</div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col gap-1">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
              {item.label && (
                <span className="ml-auto text-xs bg-primary text-primary-foreground rounded-full py-0.5 px-2">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-1">
          {otherNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Acme Inc.</p>
            <p className="text-xs text-muted-foreground">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
