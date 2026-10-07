import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'AI Research', path: '/research' },
    { name: 'Compare', path: '/compare' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 rounded-none bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Rocket className="w-8 h-8 text-accent" />
            <Link to="/" className="text-xl font-bold tracking-wider text-white">
              IntoTheSpace
            </Link>
            <span className="ml-4 px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/50 flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
              DEMO MODE
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    location.pathname === link.path 
                      ? 'bg-primary/20 text-primary' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
