/** @format */

import { Route, Routes, useLocation } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import VehicleSelection from './components/VehicleSelection';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';
import Login from './components/Authentication/Login';
// import ProtectedRoute from './utils/Protected';
import StepIndicator from './components/StepIndicator';
import BookingHistory from './components/BookingHistory';

function App() {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div className='h-screen w-screen overflow-hidden bg-[#F3F4F6]'>
			{location.pathname !== '/login' && location.pathname !== '/' && (
				<StepIndicator />
			)}
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>

				<Route
					path='/'
					element={<BookingHistory />}
				/>

				<Route
					path='/locationForm'
					element={
						// <ProtectedRoute>
						<LocationForm />
						// </ProtectedRoute>
					}
				/>
				<Route
					path='/select-vehicle'
					element={
						// <ProtectedRoute>
						<VehicleSelection />
						// </ProtectedRoute>
					}
				/>
				<Route
					path='/booking-details'
					element={
						// <ProtectedRoute>
						<BookingDetails />
						// </ProtectedRoute>
					}
				/>
				<Route
					path='/confirmation'
					element={
						// <ProtectedRoute>
						<Confirmation />
						// </ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
