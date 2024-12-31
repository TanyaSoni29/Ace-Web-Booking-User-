/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LocationForm() {
  const [pickupAddress, setPickupAddress] = useState(""); // Renamed from `from`
  const [destinationAddress, setDestinationAddress] = useState(""); // Renamed from `to`
  const [pickupDate, setPickupDate] = useState(""); // Matches `pickupDateTime`
  const [pickupTime, setPickupTime] = useState(""); // Matches `pickupDateTime`
  const [isDistance, setIsDistance] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Prepare the payload
    const bookingDetails = {
      pickupAddress,
      destinationAddress,
      pickupDateTime: `${pickupDate} ${pickupTime}`, // Combine date and time
    };

    // Store in localStorage
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    navigate("/select-vehicle");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6]">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between mb-4">
          <button
            className={`flex-1 py-2 text-center rounded-tl-lg ${
              isDistance
                ? "bg-[#0369A1] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setIsDistance(true)}
          >
            Distance
          </button>
          <button
            className={`flex-1 py-2 text-center rounded-tr-lg ${
              !isDistance
                ? "bg-[#0369A1] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setIsDistance(false)}
          >
            Hourly
          </button>
        </div>
        <div className="space-y-4">
          {/* Pickup Address */}
          <input
            type="text"
            placeholder="Pickup Address"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
              pickupAddress
                ? "bg-sky-700 text-white"
                : "bg-white text-sky-700"
            } border border-sky-300 focus:border-sky-500`}
          />

          {/* Destination Address or Hours */}
          {isDistance ? (
            <input
              type="text"
              placeholder="Destination Address"
              value={destinationAddress}
              onChange={(e) => setDestinationAddress(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                destinationAddress
                  ? "bg-sky-700 text-white"
                  : "bg-white text-sky-700"
              } border border-sky-300 focus:border-sky-500`}
            />
          ) : (
            <select
              className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white text-sky-700 border border-sky-300 focus:border-sky-500"
              value={destinationAddress}
              onChange={(e) => setDestinationAddress(e.target.value)}
            >
              <option value="">Select Hours</option>
              <option value="2 Hours">2 Hours</option>
              <option value="4 Hours">4 Hours</option>
              <option value="6 Hours">6 Hours</option>
              <option value="8 Hours">8 Hours</option>
            </select>
          )}

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                  pickupDate ? "bg-sky-700 text-white" : "bg-white text-sky-700"
                } border border-sky-300 focus:border-sky-500`}
              />
              <i className="fa fa-calendar absolute right-4 top-1/2 transform -translate-y-1/2 text-sky-500 pointer-events-none"></i>
            </div>
            <div className="relative">
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                  pickupTime ? "bg-sky-700 text-white" : "bg-white text-sky-700"
                } border border-sky-300 focus:border-sky-500`}
              />
              <i className="fa fa-clock absolute right-4 top-1/2 transform -translate-y-1/2 text-sky-500 pointer-events-none"></i>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition duration-300 shadow-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default LocationForm;
