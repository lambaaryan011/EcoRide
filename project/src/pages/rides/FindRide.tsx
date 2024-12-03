import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Search, Calendar, Users, Filter, MapPin } from 'lucide-react';
import { SearchInput } from '../../components/forms/SearchInput';
import { Button } from '../../components/ui/Button';
import { RideCard } from '../../components/rides/RideCard';

const searchSchema = z.object({
  from: z.string().min(1, 'Starting point is required'),
  to: z.string().min(1, 'Destination is required'),
  date: z.string().min(1, 'Date is required'),
  seats: z.string().min(1, 'Number of seats is required'),
});

type SearchFormData = z.infer<typeof searchSchema>;

const mockRides = [
  {
    id: '1',
    driverId: 'driver1',
    driver: {
      name: 'John Doe',
      rating: 4.8,
    },
    startLocation: {
      address: 'San Francisco, CA',
      lat: 37.7749,
      lng: -122.4194,
    },
    endLocation: {
      address: 'Los Angeles, CA',
      lat: 34.0522,
      lng: -118.2437,
    },
    departureTime: new Date('2024-03-20T10:00:00'),
    availableSeats: 3,
    price: 45,
    status: 'scheduled',
  },
  {
    id: '2',
    driverId: 'driver2',
    driver: {
      name: 'Jane Smith',
      rating: 4.9,
    },
    startLocation: {
      address: 'San Francisco, CA',
      lat: 37.7749,
      lng: -122.4194,
    },
    endLocation: {
      address: 'Los Angeles, CA',
      lat: 34.0522,
      lng: -118.2437,
    },
    departureTime: new Date('2024-03-20T14:00:00'),
    availableSeats: 2,
    price: 50,
    status: 'scheduled',
  },
];

export const FindRide: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchFormData) => {
    setIsSearching(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSearching(false);
    console.log('Search data:', data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find a Ride</h1>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 hover:bg-gray-50"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SearchInput
              label="From"
              name="from"
              register={register}
              error={errors.from}
              icon={<MapPin className="h-5 w-5" />}
              placeholder="Enter starting point"
            />
            
            <SearchInput
              label="To"
              name="to"
              register={register}
              error={errors.to}
              icon={<MapPin className="h-5 w-5" />}
              placeholder="Enter destination"
            />

            <SearchInput
              label="Date"
              name="date"
              type="date"
              register={register}
              error={errors.date}
              icon={<Calendar className="h-5 w-5" />}
            />

            <SearchInput
              label="Seats"
              name="seats"
              type="number"
              register={register}
              error={errors.seats}
              icon={<Users className="h-5 w-5" />}
              min="1"
              max="8"
              placeholder="Number of seats"
            />
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit"
              variant="primary"
              size="lg"
              className="min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200"
              disabled={isSearching}
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Rides
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {mockRides.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};