import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Calendar, DollarSign, Users } from 'lucide-react';
import { Input } from '../../components/forms/Input';
import { Button } from '../../components/ui/Button';

const offerSchema = z.object({
  from: z.string().min(1, 'Starting point is required'),
  to: z.string().min(1, 'Destination is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  seats: z.string().min(1, 'Number of seats is required'),
  price: z.string().min(1, 'Price per seat is required'),
});

type OfferFormData = z.infer<typeof offerSchema>;

export const OfferRide: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OfferFormData>({
    resolver: zodResolver(offerSchema),
  });

  const onSubmit = (data: OfferFormData) => {
    console.log('Offer data:', data);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Offer A Ride</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="relative flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <Input
                label="Starting Point"
                name="from"
                register={register}
                error={errors.from}
                className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your starting point"
              />
            </div>

            <div className="relative flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <Input
                label="Destination"
                name="to"
                register={register}
                error={errors.to}
                className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your destination"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <Input
                  label="Date"
                  name="date"
                  type="date"
                  register={register}
                  error={errors.date}
                  className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <Input
                  label="Time"
                  name="time"
                  type="time"
                  register={register}
                  error={errors.time}
                  className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative flex items-center">
                <Users className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <Input
                  label="Available Seats"
                  name="seats"
                  type="number"
                  register={register}
                  error={errors.seats}
                  className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                  max="8"
                  placeholder="Number of seats"
                />
              </div>

              <div className="relative flex items-center">
                <DollarSign className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <Input
                  label="Price per Seat"
                  name="price"
                  type="number"
                  register={register}
                  error={errors.price}
                  className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="0.01"
                  placeholder="Enter price per seat"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary" size="lg">
              Publish Ride
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
