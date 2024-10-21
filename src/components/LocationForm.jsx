import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LocationForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('bookingDetails', JSON.stringify({ from, to, date, time }));
        navigate('/select-vehicle');
    };

    return (
        <div>
            <h2>Enter Your Journey Details</h2>
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
}

export default LocationForm;
