/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingDetails() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [flightNumber, setFlightNumber] = useState('');
	const [pickupSign, setPickupSign] = useState('');
	const [notes, setNotes] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('Cash');
	const navigate = useNavigate();

	const handleCheckout = () => {
		const userDetails = {
			firstName,
			lastName,
			email,
			phone,
			flightNumber,
			pickupSign,
			notes,
			paymentMethod,
		};
		localStorage.setItem('userDetails', JSON.stringify(userDetails));
		navigate('/confirmation');
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-sky-300">
			<div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl space-y-6">
				<h2 className="text-3xl font-bold text-sky-700 text-center mb-6">
					Enter Your Details
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Passenger Information */}
					<div>
						<label className="block text-sky-600 mb-2">First Name*</label>
						<input
							type="text"
							placeholder="Your First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className="w-full px-4 py-3 mb-4 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
						/>
					</div>
					<div>
						<label className="block text-sky-600 mb-2">Last Name*</label>
						<input
							type="text"
							placeholder="Your Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className="w-full px-4 py-3 mb-4 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
						/>
					</div>
					<div>
						<label className="block text-sky-600 mb-2">Email*</label>
						<input
							type="email"
							placeholder="Your Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-3 mb-4 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
						/>
					</div>
					<div>
						<label className="block text-sky-600 mb-2">Phone Number*</label>
						<input
							type="text"
							placeholder="Your Phone Number"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className="w-full px-4 py-3 mb-4 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
						/>
					</div>
				</div>

				{/* Additional Information */}
				<div>
					<h3 className="text-xl font-semibold text-sky-700 mb-4">
						Provide Additional Information
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sky-600 mb-2">Flight Number</label>
							<input
								type="text"
								placeholder="e.g., UA123, Virgin45"
								value={flightNumber}
								onChange={(e) => setFlightNumber(e.target.value)}
								className="w-full px-4 py-3 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
							/>
						</div>
						<div>
							<label className="block text-sky-600 mb-2">Pickup Sign</label>
							<input
								type="text"
								placeholder="Your Pickup Sign"
								value={pickupSign}
								onChange={(e) => setPickupSign(e.target.value)}
								className="w-full px-4 py-3 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
							/>
						</div>
						<div className="md:col-span-2">
							<label className="block text-sky-600 mb-2">Notes to Chauffeur</label>
							<textarea
								placeholder="Write here..."
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								className="w-full px-4 py-3 bg-sky-50 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
							></textarea>
						</div>
					</div>
				</div>

				{/* Payment Method */}
				<div>
					<h3 className="text-xl font-semibold text-sky-700 mb-4">
						Choose Payment Option
					</h3>
					<div className="flex items-center space-x-6">
						<label className="flex items-center">
							<input
								type="radio"
								value="Cash"
								checked={paymentMethod === 'Cash'}
								onChange={(e) => setPaymentMethod(e.target.value)}
								className="form-radio text-sky-600 focus:ring-sky-500"
							/>
							<span className="ml-2 text-sky-600">Cash</span>
							<img
								src="/path-to-cash-payment-image.png"
								alt="Cash Payment"
								className="ml-2 w-16 h-auto"
							/>
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								value="Card"
								checked={paymentMethod === 'Card'}
								onChange={(e) => setPaymentMethod(e.target.value)}
								className="form-radio text-sky-600 focus:ring-sky-500"
							/>
							<span className="ml-2 text-sky-600">Card</span>
							<img
								src="/path-to-card-payment-image.png"
								alt="Card Payment"
								className="ml-2 w-16 h-auto"
							/>
						</label>
					</div>
				</div>

				<button
					onClick={handleCheckout}
					className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white py-3 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
				>
					Checkout
				</button>
			</div>
		</div>
	);
}

export default BookingDetails;
