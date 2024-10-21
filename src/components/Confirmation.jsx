import React from 'react';

function Confirmation() {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    const selectedVehicle = localStorage.getItem('selectedVehicle');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>From: {bookingDetails.from}</p>
            <p>To: {bookingDetails.to}</p>
            <p>Date: {bookingDetails.date}</p>
            <p>Time: {bookingDetails.time}</p>
            <p>Vehicle: {selectedVehicle}</p>
            <p>Name: {userDetails.name}</p>
            <p>Phone: {userDetails.phone}</p>
            <p>Email: {userDetails.email}</p>
            <p>Payment Method: {userDetails.paymentMethod}</p>
            <button onClick={() => window.print()}>Print</button>
        </div>
    );
}

export default Confirmation;
