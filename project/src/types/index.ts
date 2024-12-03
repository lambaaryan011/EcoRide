export interface User {
  id: string;
  name: string;
  email: string;
  role: 'driver' | 'passenger';
  avatar?: string;
}

export interface Ride {
  id: string;
  driverId: string;
  startLocation: Location;
  endLocation: Location;
  departureTime: Date;
  availableSeats: number;
  price: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface Location {
  address: string;
  lat: number;
  lng: number;
}