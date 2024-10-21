/** @format */

import { Route, Routes } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import VehicleSelection from './components/VehicleSelection';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';
import Login from './components/Authentication/Login';
import BookingHistory from './components/BookingHistory';
import BookingLayout from './components/BookingLayout';
// import { useEffect } from 'react';

function App() {
	return (
		<div className='h-screen w-screen overflow-hidden bg-[#F3F4F6]'>
			<Routes>
				{/* Login Route */}
				<Route
					path='/login'
					element={<Login />}
				/>

				{/* Booking History Route - Redirect here after login */}
				<Route
					path='/'
					element={<BookingHistory />}
				/>

				{/* Booking Steps (Protected) */}
				<Route element={<BookingLayout />}>
					<Route
						path='/locationForm'
						element={<LocationForm />}
					/>
					<Route
						path='/select-vehicle'
						element={<VehicleSelection />}
					/>
					<Route
						path='/booking-details'
						element={<BookingDetails />}
					/>
					<Route
						path='/confirmation'
						element={<Confirmation />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
