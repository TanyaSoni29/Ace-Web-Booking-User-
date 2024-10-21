import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingDetails() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    const handleCheckout = () => {
        const userDetails = { name, phone, email, paymentMethod };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        navigate('/confirmation');
    };

    return (
        <div>
            <h2>Enter Your Details</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
                <label>
                    <input type="radio" value="Cash" checked={paymentMethod === 'Cash'} onChange={(e) => setPaymentMethod(e.target.value)} />
                    Cash
                </label>
                <label>
                    <input type="radio" value="Card" checked={paymentMethod === 'Card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                    Card
                </label>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default BookingDetails;
