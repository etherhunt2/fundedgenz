import React, { useEffect } from 'react';
import './payment.css';
import { useSearchParams } from 'react-router-dom';

const Payment = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get('userId');
    const email = searchParams.get('email');

    useEffect(() => {
        if (!userId || !email) {
            window.location.href = '/signup';
        }
    }, [userId, email]);

    return (
        <div className="payment-bg">
            <div className="payment-card">
                <div className="payment-header">
                    <div className="payment-title">Complete Your Payment</div>
                    <div className='payment-header-row'>
                        <div className="payment-amount">₹5000</div>
                        <div className="payment-payto">
                            <span>Pay to</span>
                            <span className="payment-payee">Funded GenZ</span>
                            <span className="payment-upi">9175388622@upi<span className="copy-icon">📋</span></span>
                        </div>
                    </div>
                </div>
                <div className="payment-timer">
                    <span className="timer-icon">⏰</span>
                    {(() => {
                        const [timeLeft, setTimeLeft] = React.useState(300); // 5 minutes in seconds
                        const navigate = window.location && window.location.pathname !== undefined
                            ? (path) => { window.location.href = path; }
                            : () => { };

                        React.useEffect(() => {
                            if (timeLeft <= 0) {
                                navigate('/');
                                return;
                            }
                            const timer = setInterval(() => {
                                setTimeLeft((prev) => prev - 1);
                            }, 1000);
                            return () => clearInterval(timer);
                        }, [timeLeft]);

                        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
                        const seconds = String(timeLeft % 60).padStart(2, '0');
                        return <span>Time left: {minutes}:{seconds}</span>;
                    })()}
                </div>
                <div className="payment-qr">
                    {/* Inline SVG QR code placeholder */}
                    <img src='/qr.jpeg' alt="QR Code" />
                </div>
                <a
                    href={`https://api.whatsapp.com/send?phone=919175388622&text=Payment%20Successful!%20My%20User%20ID%3A%20${userId}%20%7C%20Email%3A%20${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        background: '#f7e70b',
                        color: '#222',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.7rem 1.5rem',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        margin: '1.2rem auto 0 auto',
                        display: 'block',
                        boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
                        textAlign: 'center',
                        textDecoration: 'none'
                    }}
                >
                    Confirm Your Payment
                </a>
                <div className="payment-instructions">
                    <div className="instructions-title">Instructions:</div>
                    <ol>
                        <li>Scan the QR code using your UPI app or copy the UPI ID and paste it in any UPI app.</li>
                        <li>Enter the amount and complete the payment.</li>
                        <li>After completing the payment, click "Confirm Your Payment."</li>
                        <li>Take a Screenshot Of Your Payment and Share</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Payment;