/** @format */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFormData } from '../../slices/formSlice'; // Adjust the path based on your file structure

function LocationForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fetch existing data from Redux (if any) to prefill the form
	const formData = useSelector((state) => state.forms.form);

	const [pickupAddress, setPickupAddress] = useState(
		formData.pickupAddress || ''
	);
	const [destinationAddress, setDestinationAddress] = useState(
		formData.destinationAddress || ''
	);
	const [pickupDate, setPickupDate] = useState(
		formData.pickupDateTime ? formData.pickupDateTime.split(' ')[0] : ''
	);
	const [pickupTime, setPickupTime] = useState(
		formData.pickupDateTime ? formData.pickupDateTime.split(' ')[1] : ''
	);
	const [isDistance, setIsDistance] = useState(true);

	const handleSubmit = () => {
		if (!pickupAddress || !pickupDate || !pickupTime) {
			alert('Please fill in all required fields.');
			return;
		}

		const bookingDetails = {
			pickupAddress,
			destinationAddress,
			pickupDateTime: `${pickupDate} ${pickupTime}`,
		};

		// Dispatch the form data to Redux
		dispatch(updateFormData(bookingDetails));

		// Navigate to the next step
		navigate('/select-vehicle');
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-[#F3F4F6]'>
			<div className='bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md'>
				<div className='flex justify-between mb-4'>
					<button
						className={`flex-1 py-2 text-center rounded-tl-lg ${
							isDistance ? 'bg-[#0369A1] text-white' : 'bg-white text-gray-700'
						}`}
						onClick={() => setIsDistance(true)}
					>
						Distance
					</button>
					<button
						className={`flex-1 py-2 text-center rounded-tr-lg ${
							!isDistance ? 'bg-[#0369A1] text-white' : 'bg-white text-gray-700'
						}`}
						onClick={() => setIsDistance(false)}
					>
						Hourly
					</button>
				</div>
				<div className='space-y-4'>
					<input
						type='text'
						placeholder='Pickup Address'
						value={pickupAddress}
						onChange={(e) => setPickupAddress(e.target.value)}
						className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
					/>
					{isDistance ? (
						<input
							type='text'
							placeholder='Destination Address'
							value={destinationAddress}
							onChange={(e) => setDestinationAddress(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
					) : (
						<select
							value={destinationAddress}
							onChange={(e) => setDestinationAddress(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						>
							<option value=''>Select Hours</option>
							<option value='2 Hours'>2 Hours</option>
							<option value='4 Hours'>4 Hours</option>
							<option value='6 Hours'>6 Hours</option>
							<option value='8 Hours'>8 Hours</option>
						</select>
					)}
					<div className='grid grid-cols-2 gap-4'>
						<input
							type='date'
							value={pickupDate}
							onChange={(e) => setPickupDate(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
						<input
							type='time'
							value={pickupTime}
							onChange={(e) => setPickupTime(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
					</div>
				</div>
				<button
					onClick={handleSubmit}
					className='mt-6 w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition duration-300 shadow-lg'
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default LocationForm;
