import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Users, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { format } from 'date-fns';

interface RideCardProps {
  ride: {
    id: string;
    driver: {
      name: string;
      rating: number;
    };
    startLocation: {
      address: string;
    };
    endLocation: {
      address: string;
    };
    departureTime: Date;
    availableSeats: number;
    price: number;
  };
}

export const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBookNow = () => {
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000); // Auto-close popup after 3 seconds
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Ride Details */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                {ride.driver.name.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{ride.driver.name}</h3>
              <div className="flex items-center">
                <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium text-yellow-700">{ride.driver.rating}</span>
                </div>
                <div className="flex items-center ml-2 text-green-700 text-sm">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {/* Locations */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">From</p>
                <p className="text-gray-900 font-medium">{ride.startLocation.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">To</p>
                <p className="text-gray-900 font-medium">{ride.endLocation.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ride Info */}
        <div className="space-y-4">
          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <Clock className="h-5 w-5 text-gray-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Departure</p>
              <p className="text-gray-900 font-medium">{format(ride.departureTime, 'MMM d, yyyy')}</p>
              <p className="text-gray-900 font-medium">{format(ride.departureTime, 'h:mm a')}</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <Users className="h-5 w-5 text-gray-500 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">Available Seats</p>
              <p className="text-gray-900 font-medium">{ride.availableSeats}</p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col justify-between">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-6 w-6 text-blue-600" />
              <span className="text-3xl font-bold text-blue-600">${ride.price}</span>
            </div>
            <p className="text-center text-sm text-blue-600 font-medium">per seat</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Confirmation Popup */}
      {isPopupVisible && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">Ride Booked Successfully!</h2>
            <p className="text-gray-600 mt-2">Thank you for booking your ride.</p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setPopupVisible(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
