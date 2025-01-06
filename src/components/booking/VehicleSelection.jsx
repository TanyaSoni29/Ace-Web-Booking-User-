/** @format */

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFormData } from '../../slices/formSlice';

function VehicleSelection() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fetch booking details from Redux store
	const bookingDetails = useSelector((state) => state.forms.form);

	const [selectedCar, setSelectedCar] = useState(null);

	// List of available vehicles
	const vehicles = [
		{ brand: 'Toyota Prius', price: 20 },
		{ brand: 'Honda Civic', price: 25 },
		{ brand: 'BMW X5', price: 45 },
		{ brand: 'Mercedes E-Class', price: 50 },
		{ brand: 'Audi A6', price: 55 },
		{ brand: 'Tesla Model 3', price: 65 },
		{ brand: 'Ford Mustang', price: 70 },
		{ brand: 'Chevrolet Malibu', price: 35 },
	];

	const handleVehicleSelect = (vehicle) => {
		setSelectedCar(vehicle);
		dispatch(updateFormData({ selectedCar: vehicle })); // Update Redux state
	};

	const handleSubmit = () => {
		if (!selectedCar) {
			alert('Please select a vehicle.');
			return;
		}

		// Navigate to Booking Details Page
		navigate('/booking-details');
	};

	return (
		<div className='min-h-screen bg-gray-100 py-10 px-4'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Vehicle Selection */}
				<div className='bg-white p-6 rounded-lg shadow-lg'>
					<h2 className='text-2xl font-bold text-sky-600 mb-4'>
						Select Your Vehicle
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{vehicles.map((vehicle, index) => (
							<div
								key={index}
								onClick={() => handleVehicleSelect(vehicle)}
								className={`p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
									selectedCar?.brand === vehicle.brand
										? 'bg-sky-600 text-white border-sky-600'
										: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
								}`}
							>
								<h3 className='text-lg font-semibold'>{vehicle.brand}</h3>
								<p className='text-gray-500'>
									<span className='font-bold'>£{vehicle.price}</span> per ride
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Booking Summary with Map */}
				<div className='bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='text-xl font-bold text-sky-600 mb-4'>
						Booking Summary
					</h3>
					<div className='mb-4 space-y-2'>
						<p className='text-gray-800'>
							<span className='font-semibold'>Pickup Address:</span>{' '}
							{bookingDetails.pickupAddress}
						</p>
						<p className='text-gray-800'>
							<span className='font-semibold'>Destination Address:</span>{' '}
							{bookingDetails.destinationAddress}
						</p>
						<p className='text-gray-800'>
							<span className='font-semibold'>Pickup Date & Time:</span>{' '}
							{bookingDetails.pickupDateTime}
						</p>
						{selectedCar && (
							<p className='text-gray-800'>
								<span className='font-semibold'>Selected Car:</span> {selectedCar.brand} (£
								{selectedCar.price})
							</p>
						)}
					</div>

					{/* Map Section */}
					<div className='w-full h-48 bg-gray-200 rounded-lg overflow-hidden'>
						<iframe
							src='https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Gillingham+Station'
							title='Google Maps'
							className='w-full h-full'
							allowFullScreen
						></iframe>
					</div>

					{/* Submit Button */}
					<button
						className='mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300'
						onClick={handleSubmit}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default VehicleSelection;
