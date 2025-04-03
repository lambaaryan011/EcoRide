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
- React (TypeScript)
- Redux Toolkit (State Management)
- Tailwind CSS (UI Styling)
- Google Maps API (Route Visualization)
- Vite (Bundler)

### **Backend (Planned Features)**
- Node.js with Express.js
- JWT (Authentication)

### **Tools & Deployment**
- ESLint & Prettier (Code Linting & Formatting)
- PostCSS (CSS Processing)


---

## Project Structure

```
└── lambaaryan011-ecoride/
    ├── Readme.md
    └── project/
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vite.config.ts
        ├── .gitignore
        ├── src/
        │   ├── App.tsx
        │   ├── index.css
        │   ├── main.tsx
        │   ├── vite-env.d.ts
        │   ├── components/
        │   │   ├── forms/
        │   │   │   ├── Input.tsx
        │   │   │   └── SearchInput.tsx
        │   │   ├── layout/
        │   │   │   └── Header.tsx
        │   │   ├── rides/
        │   │   │   └── RideCard.tsx
        │   │   └── ui/
        │   │       └── Button.tsx
        │   ├── lib/
        │   │   └── axios.ts
        │   ├── pages/
        │   │   ├── Home.tsx
        │   │   ├── auth/
        │   │   │   ├── Login.tsx
        │   │   │   └── Register.tsx
        │   │   └── rides/
        │   │       ├── FindRide.tsx
        │   │       └── OfferRide.tsx
        │   ├── stores/
        │   │   └── authStore.ts
        │   └── types/
        │       └── index.ts
```

---

## Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- Node.js (>=16.x)
- Package manager (npm or yarn)

### **Steps to Run Locally**

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/lambaaryan011-ecoride.git
   cd lambaaryan011-ecoride/project
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License.

---

Made with ❤️ for smarter and greener travel! 🚀

