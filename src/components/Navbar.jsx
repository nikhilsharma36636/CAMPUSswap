import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  LogIn, 
  UserPlus, 
  LayoutDashboard, 
  User, 
  LogOut, 
  ShieldCheck, 
  Sparkles,
  PlusCircle,
  Tag
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync auth state from localStorage for immediate preview & Phase 1 testing
  useEffect(() => {
    const readAuth = () => {
      try {
        const stored = localStorage.getItem('campusswap_user');
        if (stored) {
          setCurrentUser(JSON.parse(stored));
        } else {
          setCurrentUser(null);
        }
      } catch {
        setCurrentUser(null);
      }
    };
    readAuth();
    window.addEventListener('storage', readAuth);
    return () => window.removeEventListener('storage', readAuth);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('campusswap_user');
    localStorage.removeItem('campusswap_token');
    setCurrentUser(null);
    setIsOpen(false);
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Campus trust top ribbon */}
      <div className="bg-indigo-900 text-indigo-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <ShieldCheck className="w-3 h-3 mr-1" />
              Verified College Network
            </span>
            <span className="hidden sm:inline text-indigo-200">
              Zero shipping fees • Direct campus meetups at library, gates & hostels
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden md:inline text-indigo-300">Active Campus:</span>
            <span className="font-semibold text-white bg-indigo-800 px-2 py-0.5 rounded">NIET Greater Noida</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-indigo-200 transition-transform group-hover:scale-105">
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Campus<span className="text-indigo-600">Swap</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200/60">
                  College Only
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium -mt-0.5 tracking-tight hidden sm:block">
                Your Campus. Your Marketplace.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/marketplace"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/marketplace') 
                  ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Marketplace
            </Link>

            <a
              href="#how-it-works"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  navigate('/#how-it-works');
                }
              }}
            >
              How It Works
            </a>

            <a
              href="#about"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  navigate('/#about');
                }
              }}
            >
              About
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {currentUser ? (
              <>
                <Link
                  to="/create-listing"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Sell Item
                </Link>

                <Link
                  to="/dashboard"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive('/profile') 
                      ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User className="w-4 h-4 text-gray-500" />
                  <span>{currentUser.name ? currentUser.name.split(' ')[0] : 'Profile'}</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="sr-only">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <LogIn className="w-4 h-4 text-gray-500" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-sm shadow-indigo-200 transition-all hover:shadow"
                >
                  <UserPlus className="w-4 h-4" />
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/marketplace"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/marketplace') ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Marketplace
          </Link>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            How It Works
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            About
          </a>

          <div className="pt-3 border-t border-gray-200 mt-2">
            {currentUser ? (
              <div className="space-y-1">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Signed in as <span className="text-gray-900 font-bold">{currentUser.name}</span> ({currentUser.college || 'NIET'})
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <LayoutDashboard className="w-5 h-5 text-indigo-600" />
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <User className="w-5 h-5 text-gray-500" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-2 bg-indigo-600 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
