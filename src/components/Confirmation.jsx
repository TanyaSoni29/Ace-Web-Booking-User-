/** @format */

import { useNavigate } from 'react-router-dom';

function Confirmation() {
	const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
	const selectedVehicle = JSON.parse(localStorage.getItem('selectedVehicle'));
	const userDetails = JSON.parse(localStorage.getItem('userDetails'));

	const navigate = useNavigate();

	// Placeholder for reservation number and other fixed data
	const reservationNumber = 'SKT-000052';
	const bookingDate = '21-10-2024 09:52';

	const handleFinish = () => {
		// Prepare the complete booking information
		const newBooking = {
			reservationNumber,
			date: bookingDetails.date,
			time: bookingDetails.time,
			from: bookingDetails.from,
			to: bookingDetails.to,
			vehicleName: selectedVehicle?.name || 'N/A',
			price: selectedVehicle?.price || '£0.00',
			paymentMethod: userDetails.paymentMethod,
			firstName: userDetails.firstName,
			lastName: userDetails.lastName,
			phone: userDetails.phone,
			email: userDetails.email,
			flightNumber: userDetails.flightNumber || 'N/A',
			pickupSign: userDetails.pickupSign || 'N/A',
			notes: userDetails.notes || 'N/A',
			bookingDate,
		};

		// Retrieve existing history or create a new array
		const storedHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
		storedHistory.push(newBooking);
		localStorage.setItem('bookingHistory', JSON.stringify(storedHistory));

		// Navigate back to the location form or any starting point
		navigate('/');
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-4">
			<div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-xl w-full max-w-4xl space-y-6">
				<h2 className="text-2xl font-semibold text-sky-800 mb-6 text-center">
					Booking Confirmation:{' '}
					<span className="text-red-500">
						Thank you for booking with Ace Taxi. Your reservation number is{' '}
						{reservationNumber}
					</span>
				</h2>

				{/* Trip Details */}
				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
						<h3 className="text-lg font-medium text-red-500 mb-2">Trip Details</h3>
						<p className="text-gray-700">
							<span className="font-normal">Date & Time:</span>{' '}
							{bookingDetails.date} {bookingDetails.time}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Booking For:</span> Self
						</p>
						<p className="text-gray-700">
							<span className="font-normal">From:</span> {bookingDetails.from}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">To:</span> {bookingDetails.to}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Estimated Time:</span> 1 hr and 19 minutes
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Distance:</span> 40.48 miles
						</p>
						<h4 className="mt-4 font-medium text-gray-800">Additional Details</h4>
						<p className="text-gray-700">
							<span className="font-normal">Flight Number:</span>{' '}
							{userDetails.flightNumber || 'N/A'}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Pickup Sign:</span>{' '}
							{userDetails.pickupSign || 'N/A'}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Notes for Chauffeur:</span>{' '}
							{userDetails.notes || 'N/A'}
						</p>
					</div>

					{/* Vehicle & Customer Details */}
					<div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
						<h3 className="text-lg font-medium text-red-500 mb-2">Vehicle Details</h3>
						<p className="text-gray-700">
							<span className="font-normal">Vehicle Name:</span>{' '}
							{selectedVehicle?.name || 'N/A'}
						</p>
						<h3 className="text-lg font-medium text-red-500 mt-4 mb-2">Customer Information</h3>
						<p className="text-gray-700">
							<span className="font-normal">Name:</span>{' '}
							{userDetails.firstName} {userDetails.lastName}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Phone Number:</span>{' '}
							{userDetails.phone}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Email:</span> {userDetails.email}
						</p>
						<h3 className="text-lg font-medium text-red-500 mt-4 mb-2">Booking Details</h3>
						<p className="text-gray-700">
							<span className="font-normal">Booking Reservation:</span>{' '}
							{reservationNumber}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Booking Date:</span> {bookingDate}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Payment Method:</span>{' '}
							{userDetails.paymentMethod}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Gross Total:</span>{' '}
							{selectedVehicle?.price || '£0.00'}
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Discount:</span> £0.00
						</p>
						<p className="text-gray-700">
							<span className="font-normal">VAT 0.00%:</span> £0.00
						</p>
						<p className="text-gray-700">
							<span className="font-normal">Net Total:</span>{' '}
							{selectedVehicle?.price || '£0.00'}
						</p>
					</div>
				</div>

				{/* Important Information */}
				<div className="p-4 border-t border-gray-200 mt-6 bg-white rounded-lg shadow-sm">
					<h4 className="font-medium text-sky-700">
						Important Information for Your Reservation:
					</h4>
					<ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
						<li>
							Airport parking charges are not included. Please pay them directly at the airport.
						</li>
						<li>
							Contact Ace Taxi helpline for cancellations, changes, or credit card payments.
						</li>
					</ul>
				</div>

				{/* Action Buttons */}
				<div className="flex space-x-4 mt-8">
					<button
						onClick={() => window.print()}
						className="flex-1 bg-gradient-to-r from-sky-600 to-blue-500 text-white py-3 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md"
					>
						Print
					</button>
					<button
						onClick={handleFinish}
						className="flex-1 bg-gradient-to-r from-green-500 to-green-400 text-white py-3 rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 shadow-md"
					>
						Finish
					</button>
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
