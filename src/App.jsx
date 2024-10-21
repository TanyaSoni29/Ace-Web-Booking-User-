/** @format */

import { Route, Routes } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import VehicleSelection from './components/VehicleSelection';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';
import Login from './components/Authentication/Login';
// import ProtectedRoute from './utils/Protected';
import StepIndicator from './components/StepIndicator';

function App() {
	return (
		<div>
			<StepIndicator />
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/'
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
