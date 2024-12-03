import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../stores/authStore';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">RideShare</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Find a Ride
            </Link>
            <Link to="/offer" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Offer a Ride
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                <Button variant="outline" size="sm" onClick={handleAuthAction}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="primary" size="sm" onClick={handleAuthAction}>
                Sign In
              </Button>
            )}
          </nav>

          <div className="flex md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};