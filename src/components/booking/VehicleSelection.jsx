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

	const [selectedPassengers, setSelectedPassengers] = useState(
		bookingDetails.passengers || null
	);

	// List of available vehicles
	const vehicles = [
		{ passengers: 2 },
		{ passengers: 4 },
		{ passengers: 5 },
		{ passengers: 6 },
	];

	const handleVehicleSelect = (vehicle) => {
		setSelectedPassengers(vehicle.passengers);
		dispatch(updateFormData({ passengers: vehicle.passengers })); // Update Redux state
	};

	const handleSubmit = () => {
		if (!selectedPassengers) {
			alert('Please select a passenger count.');
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
						Select Passengers
					</h2>
					<div className='space-y-4'>
						{vehicles.map((vehicle, index) => (
							<button
								key={index}
								onClick={() => handleVehicleSelect(vehicle)}
								className={`flex items-center justify-between p-4 border rounded-lg transition duration-300 w-full ${
									selectedPassengers === vehicle.passengers
										? 'bg-sky-600 text-white border-sky-600'
										: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
								}`}
							>
								<h3 className='text-lg font-semibold'>
									{vehicle.passengers} Passengers
								</h3>
							</button>
						))}
					</div>
				</div>

				{/* Booking Summary */}
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
						{selectedPassengers && (
							<p className='text-gray-800'>
								<span className='font-semibold'>Passengers:</span>{' '}
								{selectedPassengers}
							</p>
						)}
					</div>
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
