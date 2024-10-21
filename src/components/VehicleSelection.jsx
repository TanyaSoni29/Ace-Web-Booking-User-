/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VehicleSelection() {
	const [selectedVehicle, setSelectedVehicle] = useState('');
	const navigate = useNavigate();

	const handleVehicleSelect = (vehicle) => {
		setSelectedVehicle(vehicle);
		localStorage.setItem('selectedVehicle', vehicle);
		navigate('/booking-details');
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-blue-500">
			<div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
				<h2 className="text-3xl font-bold text-sky-600 text-center mb-6">
					Select Your Vehicle
				</h2>
				<p className="text-center text-gray-700 mb-4">
					Selected Vehicle:{" "}
					<span className="font-semibold text-gray-900">
						{selectedVehicle || 'None'}
					</span>
				</p>
				<div className="space-y-4">
					<button
						onClick={() => handleVehicleSelect('Saloon')}
						className={`w-full p-4 text-left border rounded-lg transition duration-300 ${
							selectedVehicle === 'Saloon'
								? 'bg-sky-600 text-white border-sky-600'
								: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
						}`}
					>
						Saloon - £101.69
					</button>
					<button
						onClick={() => handleVehicleSelect('Executive Estate')}
						className={`w-full p-4 text-left border rounded-lg transition duration-300 ${
							selectedVehicle === 'Executive Estate'
								? 'bg-sky-600 text-white border-sky-600'
								: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
						}`}
					>
						Executive Estate - £128.83
					</button>
					<button
						onClick={() => handleVehicleSelect('MPV5')}
						className={`w-full p-4 text-left border rounded-lg transition duration-300 ${
							selectedVehicle === 'MPV5'
								? 'bg-sky-600 text-white border-sky-600'
								: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
						}`}
					>
						MPV5 - £138.95
					</button>
					<button
						onClick={() => handleVehicleSelect('7 Seaters/Extra Leg')}
						className={`w-full p-4 text-left border rounded-lg transition duration-300 ${
							selectedVehicle === '7 Seaters/Extra Leg'
								? 'bg-sky-600 text-white border-sky-600'
								: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
						}`}
					>
						7 Seaters/Extra Leg - £143.00
					</button>
				</div>
				{selectedVehicle && (
					<p className="mt-6 text-center text-sm text-gray-600">
						You have selected:{" "}
						<span className="text-sky-600 font-semibold">{selectedVehicle}</span>.
						Click Next to continue.
					</p>
				)}
			</div>
		</div>
	);
}

export default VehicleSelection;
