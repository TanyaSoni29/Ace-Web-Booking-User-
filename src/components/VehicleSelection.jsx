/** @format */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function VehicleSelection() {
	const [selectedVehicle, setSelectedVehicle] = useState(null);
	const navigate = useNavigate();
	const [bookingDetails, setBookingDetails] = useState({
		from: '',
		to: '',
		date: '',
		time: '',
	});

	useEffect(() => {
		// Retrieve the booking details from localStorage
		const details = JSON.parse(localStorage.getItem('bookingDetails'));
		if (details) {
			setBookingDetails(details);
		}
	}, []);

	const vehicles = [
		{ name: 'Saloon', price: '£101.69', passengers: 4, bags: 2, handCarry: 2 },
		{ name: 'Executive Estate', price: '£128.83', passengers: 4, bags: 3, handCarry: 3 },
		{ name: 'MPV5', price: '£138.95', passengers: 5, bags: 4, handCarry: 4 },
		{ name: '7 Seaters/Extra Leg', price: '£143.00', passengers: 6, bags: 5, handCarry: 4 },
	];

	const handleVehicleSelect = (vehicle) => {
		setSelectedVehicle(vehicle);
		localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
	};

	const handleNext = () => {
		if (selectedVehicle) {
			navigate('/booking-details');
		}
	};

	// Coordinates for the route (Crawley to London)
	const crawleyCoords = [51.1156, -0.1831]; // Latitude, Longitude for Town Centre, Crawley, UK
	const londonCoords = [51.5033, -0.1276]; // Latitude, Longitude for Victoria Station, London, UK

	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Vehicle Selection */}
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold text-sky-600 mb-4">Select Your Vehicle</h2>
					<div className="space-y-4">
						{vehicles.map((vehicle) => (
							<button
								key={vehicle.name}
								onClick={() => handleVehicleSelect(vehicle)}
								className={`flex items-center justify-between p-4 border rounded-lg transition duration-300 w-full ${
									selectedVehicle?.name === vehicle.name
										? 'bg-sky-600 text-white border-sky-600'
										: 'bg-white text-gray-900 border-gray-300 hover:bg-sky-100'
								}`}
							>
								<div>
									<h3 className="text-lg font-semibold">{vehicle.name}</h3>
									<p className="text-sm text-gray-500">
										{vehicle.passengers} Passengers, {vehicle.bags} Bags, {vehicle.handCarry} Hand
										Carry
									</p>
								</div>
								<p className="text-xl font-bold">{vehicle.price}</p>
							</button>
						))}
					</div>
				</div>

				{/* Booking Summary & Map */}
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-bold text-sky-600 mb-4">Booking Summary</h3>
					<div className="mb-4 space-y-2">
						<p className="text-gray-800">
							<span className="font-semibold">From:</span> {bookingDetails.from}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">To:</span> {bookingDetails.to}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Pickup Date & Time:</span> {bookingDetails.date} {bookingDetails.time}
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Distance:</span> 40.48 miles
						</p>
						<p className="text-gray-800">
							<span className="font-semibold">Duration:</span> 1 hr 19 min
						</p>
						{selectedVehicle && (
							<>
								<p className="text-gray-800">
									<span className="font-semibold">Vehicle:</span> {selectedVehicle.name}
								</p>
								<p className="text-gray-800">
									<span className="font-semibold">Price:</span> {selectedVehicle.price}
								</p>
							</>
						)}
					</div>
					<div className="relative h-64 rounded-lg overflow-hidden">
						<MapContainer center={crawleyCoords} zoom={8} className="w-full h-full rounded-lg">
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							/>
							<Marker position={crawleyCoords} />
							<Marker position={londonCoords} />
							<Polyline positions={[crawleyCoords, londonCoords]} color="blue" />
						</MapContainer>
					</div>
					<button
						className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300"
						onClick={handleNext}
					>
						Book Now
					</button>
				</div>
				</div>
		</div>
	);
}

export default VehicleSelection;
