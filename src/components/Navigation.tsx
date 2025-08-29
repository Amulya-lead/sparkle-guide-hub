import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, Utensils, Scissors, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/search', label: 'Search', icon: Search },
    { path: '/restaurants', label: 'Restaurants', icon: Utensils },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/salons', label: 'Salons', icon: Scissors },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-black text-gradient">CityHub</div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map(item => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-black text-gradient">CityHub</div>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'bg-gradient-primary text-primary-foreground'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border">
        <div className="grid grid-cols-5 h-16">
          {navItems.map(item => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navigation;