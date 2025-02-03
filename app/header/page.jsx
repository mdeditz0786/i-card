'use client'
import { useState } from 'react';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CalendarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: HomeIcon },
  { id: 'team', name: 'Team', icon: UserGroupIcon },
  { id: 'projects', name: 'Projects', icon: ChartBarIcon },
  { id: 'calendar', name: 'Calendar', icon: CalendarIcon },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-lg text-gray-600 hover:text-gray-900"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Vertical Navbar */}
      <nav className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-[2px]">
                <div className="h-full w-full rounded-xl bg-white flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    S
                  </span>
                </div>
              </div>
              <span className={`
                ml-3 text-xl font-semibold transition-opacity duration-300
                ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}
              `}>
                SSBAM
              </span>
            </div>
            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden md:block p-2 rounded-lg hover:bg-gray-100"
            >
              {isExpanded ? (
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <item.icon className={`
                  h-6 w-6 transition-colors duration-200
                  ${activeTab === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}
                `} />
                <span className={`
                  ml-3 font-medium transition-opacity duration-300
                  ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}
                `}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-200 space-y-1">
            <button className="w-full flex items-center px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200">
              <Cog6ToothIcon className="h-6 w-6 text-gray-400" />
              <span className={`
                ml-3 font-medium transition-opacity duration-300
                ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}
              `}>
                Settings
              </span>
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
              }}
              className="w-full flex items-center px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <ArrowLeftOnRectangleIcon className="h-6 w-6 text-red-500" />
              <span className={`
                ml-3 font-medium transition-opacity duration-300
                ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}
              `}>
                Sign out
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className={`
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'md:ml-64' : 'md:ml-20'}
      `}>
        {/* Your main content goes here */}
      </main>
    </>
  );
};

export default Header;

