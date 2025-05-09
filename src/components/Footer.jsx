import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-widgets-wrap">
                        <div className="footer-widget footer-about">
                            <div className="footer-logo">
                                <a href="/">
                                    <img src="logo.jpeg" alt="IKO" style={{ borderRadius: '20%', width: '60px', height: '60px' }} />
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
                                <li><a href="#">Partner</a></li>
                                <li><a href="#">Comparison</a></li>
                                <li><a href="#">Buy Plans</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget footer-links">
                            <h2 className="fw-title">Resources</h2>
                            <ul className="list-wrap">
                                <li><a href="/blog/">Become Investor</a></li>
                                <li><a href="/blog/">Customer Support</a></li>
                                <li><a href="/blog/">Live Chat</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="/privacy-policy/">Call Us</a></li>
                                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-widget footer-newsletter">
                            <h2 className="fw-title">Newsletter</h2>
                            <p>Subscribe to our newsletter for the latest updates</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Email Address" required />
                                <button type="submit" className="btn btn2">Subscribe</button>
                            </form>
                            <div className="footer-social">
                                <ul className="list-wrap">
                                    <li>
                                        <a href="#" target="_blank">
                                            <FaFacebook size={30} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M9.52219 6.77491L15.4786 0H14.0671L8.89518 5.88256L4.76438 0H0L6.24657 8.89547L0 16H1.41155L6.87322 9.78779L11.2356 16H16L9.52219 6.77491ZM7.58888 8.97384L6.95597 8.08805L1.92015 1.03974H4.08821L8.15218 6.72796L8.78508 7.61374L14.0677 15.0076H11.8997L7.58888 8.97384Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <AiFillInstagram size={30} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <FaTelegramPlane size={30} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-text">
                        <p>&copy; {new Date().getFullYear()} IKO. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer; 