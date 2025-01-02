import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFormData } from '../../slices/formSlice'; // Adjust the path based on your file structure
import { LuArrowDownUp } from "react-icons/lu";

function LocationForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fetch existing data from Redux (if any) to prefill the form
	const formData = useSelector((state) => state.forms.form);

	const [pickupAddress, setPickupAddress] = useState(
		formData.pickupAddress || ''
	);
	const [pickupPostCode, setPickupPostCode] = useState('');
	const [destinationAddress, setDestinationAddress] = useState(
		formData.destinationAddress || ''
	);
	const [destinationPostCode, setDestinationPostCode] = useState('');
	const [pickupDate, setPickupDate] = useState(
		formData.pickupDateTime ? formData.pickupDateTime.split(' ')[0] : new Date().toISOString().slice(0, 10)
	);
	const [pickupTime, setPickupTime] = useState(
		formData.pickupDateTime ? formData.pickupDateTime.split(' ')[1] : new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5)
	);

	const handleSwitch = () => {
		setPickupAddress(destinationAddress);
		setDestinationAddress(pickupAddress);
		setPickupPostCode(destinationPostCode);
		setDestinationPostCode(pickupPostCode);
	};

	const handleSubmit = () => {
		if (!pickupAddress || !pickupDate || !pickupTime) {
			alert('Please fill in all required fields.');
			return;
		}

		const bookingDetails = {
			pickupAddress,
			pickupPostCode,
			destinationAddress,
			destinationPostCode,
			pickupDateTime: `${pickupDate} ${pickupTime}`,
		};

		// Dispatch the form data to Redux
		dispatch(updateFormData(bookingDetails));

		// Navigate to the next step
		navigate('/select-vehicle');
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-[#F3F4F6]'>
			<div className='bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md'>
				<h1 className='text-xl font-semibold text-center text-gray-800 mb-6'>Book Your Ride</h1>
				<div className='space-y-4'>
					<div className='grid grid-cols-2 gap-4 items-center'>
						<input
							type='text'
							placeholder='Pickup Address'
							value={pickupAddress}
							onChange={(e) => setPickupAddress(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
						<input
							type='text'
							placeholder='Pickup Post Code'
							value={pickupPostCode}
							onChange={(e) => setPickupPostCode(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
					</div>
					<div className='text-center'>
						<button onClick={handleSwitch} className='p-2 text-sky-600'>
						<LuArrowDownUp />
						</button>
					</div>
					<div className='grid grid-cols-2 gap-4 items-center'>
						<input
							type='text'
							placeholder='Destination Address'
							value={destinationAddress}
							onChange={(e) => setDestinationAddress(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
						<input
							type='text'
							placeholder='Destination Post Code'
							value={destinationPostCode}
							onChange={(e) => setDestinationPostCode(e.target.value)}
							className='w-full px-4 py-3 rounded-lg bg-white border border-gray-300'
						/>
					</div>
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
