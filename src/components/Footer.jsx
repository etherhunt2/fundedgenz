import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer-section" id='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-widgets-wrap">
                        <div className="footer-widget footer-about">
                            <div className="footer-logo">
                                <a href="/">
                                    <img src="logo.png" alt="IKO" style={{ borderRadius: '20%', width: '60px', height: '60px' }} />
                                </a>
                            </div>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>FundedGenZ</span>
                                <br />
                                <span>Address:</span>
                                <br />
                                <span>Funded Genz FZCO</span>
                                <br />
                                <span>Building A5, Dubai Digital Park,</span>
                                <br />
                                <span>Dubai Silicon Oasis,</span>
                                <br />
                                <span>Dubai, United Arab Emirates</span>
                                <br />
                                <span>P.O. Box 342002</span>
                            </p>

                        </div>

                        <div className="footer-widget footer-links">
                            <h2 className="fw-title">Quick links</h2>
                            <ul className="list-wrap">
                                <li><a href="/">Home</a></li>
                                <li><a href="/signup">Partner</a></li>
                                <li><a href="#compare">Comparison</a></li>
                                <li><a href="#plan">Buy Plans</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=919175388622">Contact Us</a></li>
                                <li><a href="/signup">Affiliate Program</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget footer-links">
                            <h2 className="fw-title">Resources</h2>
                            <ul className="list-wrap">
                                <li><a href="/signup">Become Investor</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=919175388622">Customer Support</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=919175388622">Live Chat</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=919175388622">Call Us</a></li>
                                <li><a href='#'>Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget footer-newsletter">
                            <h2 className="fw-title">Contact Us</h2>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <a href="tel:+971501234567" className="d-flex align-items-center">
                                        <FaPhone className="me-2" />
                                        <span>+971 50 123 4567</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="mailto:support@fundedgenz.com" className="d-flex align-items-center">
                                        <FaEnvelope className="me-2" />
                                        <span>support@fundedgenz.com</span>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://wa.me/919175388622" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                                        <FaWhatsapp className="me-2" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-text">
                        <p>&copy; {new Date().getFullYear()} Funded GenZ. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer; 