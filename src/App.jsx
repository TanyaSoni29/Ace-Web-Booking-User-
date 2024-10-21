import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import VehicleSelection from './components/VehicleSelection';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LocationForm />} />
                <Route path="/select-vehicle" element={<VehicleSelection />} />
                <Route path="/booking-details" element={<BookingDetails />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </Router>
    );
}

export default App;
