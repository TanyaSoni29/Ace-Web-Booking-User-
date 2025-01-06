/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingHistory() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    setBookingHistory(storedHistory);
  }, []);

  const handleNewBooking = () => {
    navigate("/locationForm");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-200 p-6">
      <div className="max-w-8xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-sky-800">
            Your Booking History
          </h2>
          <button
            onClick={handleNewBooking}
            className="bg-gradient-to-r from-sky-600 to-blue-500 text-white py-2 px-6 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md"
          >
            + New Booking
          </button>
        </div>

        {/* Booking History Table */}
        {bookingHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-sky-600 text-white text-sm uppercase">
                <tr>
                  <th className="px-4 py-2 text-left">Reservation #</th>
                  <th className="px-4 py-2 text-left">Date & Time</th>
                  <th className="px-4 py-2 text-left">From</th>
                  <th className="px-4 py-2 text-left">To</th>
                  <th className="px-4 py-2 text-left">Vehicle</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Payment</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Contact</th>
                  <th className="px-4 py-2 text-left">Flight #</th>
                  <th className="px-4 py-2 text-left">Pickup Sign</th>
                  <th className="px-4 py-2 text-left">Notes</th>
                  <th className="px-4 py-2 text-left">Booking Date</th>
                </tr>
              </thead>
              <tbody>
                {bookingHistory.map((booking, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="border px-4 py-2 text-sm">
                      {booking.reservationNumber}
                    </td>
                    <td className="border px-4 py-2 text-sm">
                      {booking.date} {booking.time}
                    </td>
                    <td className="border px-4 py-2 text-sm">{booking.from}</td>
                    <td className="border px-4 py-2 text-sm">{booking.to}</td>
                    <td className="border px-4 py-2 text-sm">{booking.vehicleName}</td>
                    <td className="border px-4 py-2 text-sm">{booking.price}</td>
                    <td className="border px-4 py-2 text-sm">{booking.paymentMethod}</td>
                    <td className="border px-4 py-2 text-sm">
                      {booking.firstName} {booking.lastName}
                    </td>
                    <td className="border px-4 py-2 text-sm">
                      {booking.phone} <br /> {booking.email}
                    </td>
                    <td className="border px-4 py-2 text-sm">{booking.flightNumber}</td>
                    <td className="border px-4 py-2 text-sm">{booking.pickupSign}</td>
                    <td className="border px-4 py-2 text-sm">{booking.notes}</td>
                    <td className="border px-4 py-2 text-sm">{booking.bookingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Empty State
          <div className="text-center text-gray-600 mt-6">
            <p className="text-lg">You have no booking history yet.</p>
            <p className="text-gray-500">
              Start a new booking to see it here.
            </p>
            <button
              onClick={handleNewBooking}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow"
            >
              + New Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingHistory;
