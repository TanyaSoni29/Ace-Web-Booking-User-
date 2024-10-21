/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingDetails() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const navigate = useNavigate();

	const handleCheckout = () => {
		const userDetails = { name, phone, email, paymentMethod };
		localStorage.setItem('userDetails', JSON.stringify(userDetails));
		navigate('/confirmation');
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
			<div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md">
				<h2 className="text-3xl font-bold text-sky-700 text-center mb-6">
					Enter Your Details
				</h2>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full px-4 py-3 mb-4 bg-white bg-opacity-70 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
				/>
				<input
					type="text"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="w-full px-4 py-3 mb-4 bg-white bg-opacity-70 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full px-4 py-3 mb-4 bg-white bg-opacity-70 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
				/>
				<div className="mb-6">
					<label className="inline-flex items-center mr-4">
						<input
							type="radio"
							value="Cash"
							checked={paymentMethod === 'Cash'}
							onChange={(e) => setPaymentMethod(e.target.value)}
							className="form-radio text-sky-600 focus:ring-sky-500"
						/>
						<span className="ml-2 text-sky-600">Cash</span>
					</label>
					<label className="inline-flex items-center">
						<input
							type="radio"
							value="Card"
							checked={paymentMethod === 'Card'}
							onChange={(e) => setPaymentMethod(e.target.value)}
							className="form-radio text-sky-600 focus:ring-sky-500"
						/>
						<span className="ml-2 text-sky-600">Card</span>
					</label>
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
