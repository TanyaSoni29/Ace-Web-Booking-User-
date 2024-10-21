/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LocationForm() {
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const navigate = useNavigate();

	const handleSubmit = () => {
		localStorage.setItem(
			'bookingDetails',
			JSON.stringify({ from, to, date, time })
		);
		navigate('/select-vehicle');
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
			<div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md">
				<h2 className="text-3xl font-bold text-sky-700 text-center mb-6">
					Enter Your Journey Details
				</h2>
				<div className="space-y-4">
					<input
						type="text"
						placeholder="From"
						value={from}
						onChange={(e) => setFrom(e.target.value)}
						className={`w-full px-4 py-2 rounded focus:outline-none ${
							from ? 'bg-sky-700 text-white' : 'bg-white text-sky-700'
						} border border-sky-300 focus:border-sky-500`}
					/>
					<input
						type="text"
						placeholder="To"
						value={to}
						onChange={(e) => setTo(e.target.value)}
						className={`w-full px-4 py-2 rounded focus:outline-none ${
							to ? 'bg-sky-700 text-white' : 'bg-white text-sky-700'
						} border border-sky-300 focus:border-sky-500`}
					/>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className={`w-full px-4 py-2 rounded focus:outline-none ${
							date ? 'bg-sky-700 text-white' : 'bg-white text-sky-700'
						} border border-sky-300 focus:border-sky-500`}
					/>
					<input
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						className={`w-full px-4 py-2 rounded focus:outline-none ${
							time ? 'bg-sky-700 text-white' : 'bg-white text-sky-700'
						} border border-sky-300 focus:border-sky-500`}
					/>
				</div>
				<button
					onClick={handleSubmit}
					className="mt-6 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition duration-300 shadow-lg"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default LocationForm;
