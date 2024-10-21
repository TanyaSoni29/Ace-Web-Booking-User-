/** @format */

function Confirmation() {
	const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
	const selectedVehicle = JSON.parse(localStorage.getItem('selectedVehicle'));
	const userDetails = JSON.parse(localStorage.getItem('userDetails'));

	// Placeholder for reservation number and other fixed data
	const reservationNumber = 'SKT-000052';
	const bookingDate = '21-10-2024 09:52'; // Example date for the booking confirmation

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#F3F4F6]">
			<div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-4xl space-y-6">
				<h2 className="text-2xl font-bold text-sky-700 mb-6">
					Booking Confirmation:{" "}
					<span className="text-red-600">
						Thank you for booking with Sky Transfer. Your reservation number is {reservationNumber}
					</span>
				</h2>

				{/* Trip Details */}
				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1 p-4 border border-gray-300 rounded-lg">
						<h3 className="text-lg font-bold text-red-600 mb-2">Trip Detail</h3>
						<p className="text-gray-800">
							<span className="font-semibold">Date & Time:</span> {bookingDetails.date} {bookingDetails.time}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Booking For:</span> Self
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">From:</span> {bookingDetails.from}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">To:</span> {bookingDetails.to}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Estimated Time:</span> 1 hr and 19 minutes
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Distance:</span> 40.48 miles
						</p>
						<h4 className="mt-4 font-bold text-gray-800">Additional Detail</h4>
						<p className="text-gray-800">
							<span className="font-semibold">Flight Number:</span> {userDetails.flightNumber || 'N/A'}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Pickup Sign:</span> {userDetails.pickupSign || 'N/A'}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Notes for Chauffeur:</span> {userDetails.notes || 'N/A'}
						</p>
					</div>

					{/* Vehicle & Customer Details */}
					<div className="flex-1 p-4 border border-gray-300 rounded-lg">
						<h3 className="text-lg font-bold text-red-600 mb-2">Vehicle Detail</h3>
						<p className="text-gray-800">
							<span className="font-semibold">Vehicle Name:</span> {selectedVehicle?.name || 'N/A'}
						</p>
						<h3 className="text-lg font-bold text-red-600 mt-4 mb-2">Customer Information</h3>
						<p className="text-gray-800">
							<span className="font-semibold">Name:</span> {userDetails.firstName} {userDetails.lastName}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Phone Number:</span> {userDetails.phone}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Email:</span> {userDetails.email}
						</p>
						<h3 className="text-lg font-bold text-red-600 mt-4 mb-2">Booking Detail</h3>
						<p className="text-gray-800">
							<span className="font-semibold">Booking Reservation:</span> {reservationNumber}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Booking Date:</span> {bookingDate}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Payment Method:</span> {userDetails.paymentMethod}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Gross Total:</span> {selectedVehicle?.price || '£0.00'}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Discount:</span> £0.00
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">VAT 0.00%:</span> £0.00
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Net Total:</span> {selectedVehicle?.price || '£0.00'}
						</p>
					</div>
				</div>

				{/* Important Information */}
				<div className="p-4 border-t border-gray-300 mt-6">
					<h4 className="font-semibold text-sky-700">Important informations for your reservation:</h4>
					<ul className="list-disc list-inside text-gray-700 mt-2">
						<li>Airport parking charges are not included in the package. You have to pay them at the airport parking meter or pay your driver.</li>
						<li>Please contact the Sky Transfer helpline if you want to cancel, make changes, or pay with your credit or debit card.</li>
						<li>For address pickups, the driver will meet you at the front of the door or at the nearest parking spot in case of any parking restrictions.</li>
					</ul>
				</div>

				{/* Print Button */}
				<button
					onClick={() => window.print()}
					className="mt-8 w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white py-3 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
				>
					Print
				</button>
			</div>
		</div>
	);
}

export default Confirmation;
