import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Bell, Search, Moon, Sun, User, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  isCollapsed: boolean;
}

export function Header({ isCollapsed }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={cn(
      'fixed top-0 right-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 transition-all duration-300',
      isCollapsed ? 'md:left-[80px]' : 'md:left-[240px]',
      'left-0'
    )}>
      {/* Reserve space for mobile menu button - it's rendered in Sidebar component */}
      <div className="md:hidden w-16" />
      
      <div className="flex-1 relative max-w-md hidden md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-10" />
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 md:ml-auto">
        <Button variant="outline" size="icon" onClick={toggleTheme} className="h-8 w-8 md:h-9 md:w-9">
          {theme === 'light' ? (
            <Moon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Sun className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <Button variant="outline" size="icon" className="relative h-8 w-8 md:h-9 md:w-9">
          <Bell className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem]" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
          <span className="sr-only">Notifications</span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9">
              <Avatar className="h-6 w-6 md:h-8 md:w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
