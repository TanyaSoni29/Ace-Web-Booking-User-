/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormData } from "../../slices/formSlice";
import {
  getAddressSuggestions,
  getAddressDetails,
} from "../../utils/addressAPI"; // Importing functions
import { LuArrowDownUp } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

function LocationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch existing data from Redux (if any) to prefill the form
  const formData = useSelector((state) => state.forms.form);

  // States for pickup and destination details
  const [pickupAddress, setPickupAddress] = useState(
    formData.pickupAddress || ""
  );
  const [pickupPostCode, setPickupPostCode] = useState("");
  const [destinationAddress, setDestinationAddress] = useState(
    formData.destinationAddress || ""
  );
  const [destinationPostCode, setDestinationPostCode] = useState("");
  const [pickupDate, setPickupDate] = useState(
    formData.pickupDateTime
      ? formData.pickupDateTime.split(" ")[0]
      : new Date().toISOString().slice(0, 10)
  );
  const [pickupTime, setPickupTime] = useState(
    formData.pickupDateTime
      ? formData.pickupDateTime.split(" ")[1]
      : new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5)
  );

  const [passengers, setPassengers] = useState(1);
  const [allDay, setAllDay] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [driverPrice, setDriverPrice] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // States for address suggestions
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  // Fetch address suggestions as the user types
  const fetchSuggestions = async (value, isPickup = true) => {
    if (value.length > 2) {
      const suggestions = await getAddressSuggestions(value);
      if (isPickup) {
        setPickupSuggestions(suggestions);
      } else {
        setDestinationSuggestions(suggestions);
      }
    } else {
      if (isPickup) setPickupSuggestions([]);
      else setDestinationSuggestions([]);
    }
  };

  // Handle address selection from suggestions
  const handleSelectAddress = async (id, isPickup = true) => {
    const details = await getAddressDetails(id);
    if (isPickup) {
      setPickupAddress(details.address);
      setPickupPostCode(details.postcode);
      setPickupSuggestions([]);
    } else {
      setDestinationAddress(details.address);
      setDestinationPostCode(details.postcode);
      setDestinationSuggestions([]);
    }
  };

  // Switch pickup and destination details
  const handleSwitch = () => {
    setPickupAddress(destinationAddress);
    setDestinationAddress(pickupAddress);
    setPickupPostCode(destinationPostCode);
    setDestinationPostCode(pickupPostCode);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!pickupAddress || !pickupDate || !pickupTime) {
      alert("Please fill in all required fields.");
      return;
    }

    const bookingDetails = {
      pickupAddress,
      pickupPostCode,
      destinationAddress,
      destinationPostCode,
      pickupDateTime: `${pickupDate} ${pickupTime}`,
      passengers,
      allDay,
      hours,
      minutes,
      driverPrice,
      name,
      email,
      phone,
    };

    // Dispatch the form data to Redux
    dispatch(updateFormData(bookingDetails));

    // Navigate to the next step
    navigate("/select-vehicle");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6]">
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Book Your Ride
        </h1>

        {/* Date and ASAP */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <input
              type="datetime-local"
              className="p-2 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <label className="flex bg-white items-center gap-2 text-gray-700">
              <input type="checkbox" className="w-4 h-4 " />
              <span>ASAP</span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Repeat Booking
            </button>
            <label className="flex  items-center gap-2 text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              <span>Return</span>
            </label>
          </div>
        </div>

        {/* Pickup Address and Post Code */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Address <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Pickup Address"
                value={pickupAddress}
                onChange={(e) => {
                  setPickupAddress(e.target.value);
                  fetchSuggestions(e.target.value, true);
                }}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
              />
              {/* Suggestions Dropdown */}
              {pickupSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto w-full mt-1">
                  {pickupSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      onClick={() => handleSelectAddress(suggestion.id, true)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {suggestion.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Post Code
            </label>
            <input
              type="text"
              placeholder="Post Code"
              value={pickupPostCode}
              onChange={(e) => setPickupPostCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
            />
          </div>
        </div>

        {/* Destination Address */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Destination Address"
                value={destinationAddress}
                onChange={(e) => {
                  setDestinationAddress(e.target.value);
                  fetchSuggestions(e.target.value, false);
                }}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
              />
              {destinationSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto w-full mt-1">
                  {destinationSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      onClick={() => handleSelectAddress(suggestion.id, false)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {suggestion.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Post Code
            </label>
            <input
              type="text"
              placeholder="Post Code"
              value={destinationPostCode}
              onChange={(e) => setDestinationPostCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
            />
          </div>
        </div>

        {/* Booking Details */}
        {/* <textarea
          rows="3"
          placeholder="Booking Details"
          className="w-full  bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        ></textarea> */}

        {/* Add VIA Button */}
        {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4">
          Add VIA
        </button> */}

        {/* Driver Price, Passengers, and All Day */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block bg-white  text-sm font-medium text-gray-700 mb-1">
              Driver Price (£) <span className="text-blue-500">*</span>
            </label>
            <input
              type="number"
              value={driverPrice}
              onChange={(e) => setDriverPrice(e.target.value)}
              className="w-full bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block bg-white  text-sm font-medium text-gray-700 mb-1">
              Passengers
            </label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              className="w-4 h-4"
            />
            <span>All Day</span>
          </div>
        </div>

        {/* Hours and Minutes */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hours *
            </label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minutes *
            </label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Name, Email, and Phone */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full bg-white  p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 bg-white  border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full p-2 bg-white  border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg">
                <FiPhoneCall />
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Cancel On Arrival
          </button>
		  <div>
          <button className="bg-black text-white mr-4 px-4 py-2 rounded-lg">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
		  </div>
        </div>
      </div>
    </div>
  );
}

export default LocationForm;
