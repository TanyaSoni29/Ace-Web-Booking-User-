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
		<div>
			<h2>Select Your Vehicle</h2>
			<button onClick={() => handleVehicleSelect('Saloon')}>
				Saloon - £101.69
			</button>
			<button onClick={() => handleVehicleSelect('Executive Estate')}>
				Executive Estate - £128.83
			</button>
			<button onClick={() => handleVehicleSelect('MPV5')}>
				MPV5 - £138.95
			</button>
			<button onClick={() => handleVehicleSelect('7 Seaters/Extra Leg')}>
				7 Seaters/Extra Leg - £143.00
			</button>
		</div>
	);
}

export default VehicleSelection;
