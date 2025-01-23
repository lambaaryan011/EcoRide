# EcoRide - Driver-Passenger Connection Platform

EcoRide is a web platform designed to connect drivers traveling on specific routes with passengers heading in the same direction. The platform optimizes transportation by utilizing unused vehicle space, making travel more accessible and eco-friendly.

---

## Features

### **For Passengers**
- Search for rides based on starting point, destination, and time.
- View available seats and book rides instantly.
- Track bookings and trip history on the dashboard.

### **For Drivers**
- Add, update, and delete routes with details like available seats.
- View and manage bookings from passengers.
- Optimize ride-sharing for cost and convenience.

### **General Features**
- Real-time route matching using advanced geolocation.
- Interactive map visualization for routes (powered by Google Maps API).
- Role-based access for drivers and passengers.
- Secure user authentication with JWT.
- Responsive design for seamless use across devices.

---

## Tech Stack

### **Frontend**
- React.js
- Redux Toolkit / React Context API (State Management)
- Tailwind CSS (UI Styling)
- Google Maps API (Route Visualization)

### **Backend**
- Node.js with Express.js
- MongoDB (Database)
- JWT (Authentication)
- Mongoose (ODM for MongoDB)

### **Tools and Deployment**
- Postman (API Testing)
- Netlify / Vercel (Frontend Deployment)
- Render / Heroku (Backend Deployment)
- MongoDB Atlas (Cloud Database)

---

Ride Share/
|-- frontend/                  # Frontend files
|   |-- src/
|       |-- components/        # Reusable React components
|       |-- pages/             # Page-specific components
|       |-- services/          # API interaction logic
|       |-- context/           # Global state management
|       |-- App.js             # Main React component
|       |-- index.js           # React entry point
|-- backend/                   # Backend files
|   |-- models/                # MongoDB schemas
|   |-- controllers/           # API business logic
|   |-- routes/                # API endpoints
|   |-- middleware/            # Authentication & validation
|   |-- server.js              # Main server file
|-- .gitignore
|-- README.md
|-- package.json

Thanks
