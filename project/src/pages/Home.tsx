import React from 'react';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
 import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Share Your Journey</span>
              <span className="block text-blue-600">Save Money Together</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with travelers heading your way. Share rides, split costs, and make new friends while reducing your carbon footprint.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
              <Button
  variant="primary"
  size="lg"
  className="w-full sm:w-auto flex items-center justify-center bg-blue text-white border border-gray-300 hover:bg-voilet-100"
  onClick={() => navigate("/search")}
>
  Find A Ride
  <ArrowRight className="ml-2 -mr-1 h-5 w-5 animate-pulse" />
</Button>


              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
  variant="primary"
  size="lg"
  className="w-full sm:w-auto bg-white text-black border border-gray-300 hover:bg-gray-100"
  onClick={() => navigate("/offer")}
>
  Offer A Ride
</Button>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Safe and Secure</h3>
              <p className="mt-2 text-base text-gray-500">
                Verified users and secure payments make your journey worry-free.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Community Driven</h3>
              <p className="mt-2 text-base text-gray-500">
                Join a community of trusted travelers and make connections.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Flexible Schedule</h3>
              <p className="mt-2 text-base text-gray-500">
                Find rides that match your schedule, any time of the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};