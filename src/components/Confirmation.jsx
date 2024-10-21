/** @format */

function Confirmation() {
	const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
	const selectedVehicle = localStorage.getItem('selectedVehicle');
	const userDetails = JSON.parse(localStorage.getItem('userDetails'));

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
			<div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-lg">
				<h2 className="text-3xl font-bold text-sky-700 text-center mb-6">
					Booking Confirmation
				</h2>
				<div className="space-y-4">
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">From:</span> {bookingDetails.from}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">To:</span> {bookingDetails.to}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Date:</span> {bookingDetails.date}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Time:</span> {bookingDetails.time}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Vehicle:</span> {selectedVehicle}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Name:</span> {userDetails.name}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Phone:</span> {userDetails.phone}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Email:</span> {userDetails.email}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold text-sky-700">Payment Method:</span> {userDetails.paymentMethod}
					</p>
				</div>
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
