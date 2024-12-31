
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingHistory() {
    const [bookingHistory, setBookingHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
        setBookingHistory(storedHistory);
    }, []);

    const handleNewBooking = () => {
        navigate('/locationForm');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-200 p-6">
            <div className="max-w-8xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold text-sky-800">
                        Your Booking History
                    </h2>
                    <button
                        onClick={handleNewBooking}
                        className="bg-gradient-to-r from-sky-600 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md"
                    >
                        New Booking
                    </button>
                </div>

                {bookingHistory.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-sky-600 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">Reservation #</th>
                                    <th className="px-4 py-2 text-left">Date & Time</th>
                                    <th className="px-4 py-2 text-left">From</th>
                                    <th className="px-4 py-2 text-left">To</th>
                                    <th className="px-4 py-2 text-left">Vehicle</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th className="px-4 py-2 text-left">Payment Method</th>
                                    <th className="px-4 py-2 text-left">Customer</th>
                                    <th className="px-4 py-2 text-left">Contact</th>
                                    <th className="px-4 py-2 text-left">Flight Number</th>
                                    <th className="px-4 py-2 text-left">Pickup Sign</th>
                                    <th className="px-4 py-2 text-left">Notes</th>
                                    <th className="px-4 py-2 text-left">Booking Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingHistory.map((booking, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{booking.reservationNumber}</td>
                                        <td className="border px-4 py-2">{booking.date} {booking.time}</td>
                                        <td className="border px-4 py-2">{booking.from}</td>
                                        <td className="border px-4 py-2">{booking.to}</td>
                                        <td className="border px-4 py-2">{booking.vehicleName}</td>
                                        <td className="border px-4 py-2">{booking.price}</td>
                                        <td className="border px-4 py-2">{booking.paymentMethod}</td>
                                        <td className="border px-4 py-2">
                                            {booking.firstName} {booking.lastName}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {booking.phone} <br /> {booking.email}
                                        </td>
                                        <td className="border px-4 py-2">{booking.flightNumber}</td>
                                        <td className="border px-4 py-2">{booking.pickupSign}</td>
                                        <td className="border px-4 py-2">{booking.notes}</td>
                                        <td className="border px-4 py-2">{booking.bookingDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-600 text-center">
                        You have no booking history yet. Start a new booking to see it here.
                    </p>
                )}
            </div>
        </div>
    );
}

export default BookingHistory;
