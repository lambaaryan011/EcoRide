import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { FindRide } from './pages/rides/FindRide';
import { OfferRide } from './pages/rides/OfferRide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<FindRide />} />
            <Route path="/offer" element={<OfferRide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;