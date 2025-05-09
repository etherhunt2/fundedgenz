import React, { useEffect, useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [stickyHeader, setStickyHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setStickyHeader(true);
            } else {
                setStickyHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.classList.toggle('mobile-menu-visible');
    };

    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${stickyHeader ? 'sticky-menu' : ''}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <img src="/logo.jpeg" alt="FundedGenZ" />
                                                <span style={{ color: 'white' }}>FundedGenZ</span>
                                            </a>
                                        </div>
                                        <div className="navbar-wrap main-menu m-auto d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="menu-item current-menu-item">
                                                    <a href="/">Home</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#feature">About</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#roadmap">FAQ</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#roadmap">Affiliate</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#roadmap">Challenges</a>
                                                </li>
                                                {/* <li className="menu-item menu-item-has-children">
                                                    <a href="/blog/">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item"><a href="/blog/">Our Blog</a></li>
                                                        <li className="menu-item"><a href="/blog-details/">Blog Details</a></li>
                                                    </ul>
                                                </li> */}
                                                <li className="menu-item">
                                                    <a href="/contact/">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-lg-block">
                                            <ul className="list-wrap">
                                                {/* <li>
                                                    <div className="dropdown-link">
                                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1"
                                                            data-bs-toggle="dropdown" aria-expanded="false">ENG</a>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                            <li>
                                                                <a href="#">GER</a>
                                                                <a href="#">FREN</a>
                                                                <a href="#">ARAB</a>
                                                                <a href="#">LAT</a>
                                                                <a href="#">SPA</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li> */}
                                                <li className="header-login">
                                                    <a className="btn2" href="/my-account/">Register</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                            <i className="fas fa-bars"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-visible' : ''}`}>
                <nav className="menu-box">
                    <div className="close-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo mobile-logo">
                        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/logo.jpeg" alt="FundedGenZ" />
                            <span>FundedGenZ</span>
                        </a>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation">
                            <li className="menu-item current-menu-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#feature">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="#roadmap">FAQ</a>
                            </li>
                            <li className="menu-item">
                                <a href="#roadmap">Affiliate</a>
                            </li>
                            <li className="menu-item">
                                <a href="#roadmap">Challenges</a>
                            </li>
                            <li className="menu-item">
                                <a href="/contact/">Contact</a>
                            </li>
                            <li className="menu-item mobile-register">
                                <a className="btn2" href="/my-account/">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
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
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-telegram-plane"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`menu-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
        </>
    );
};

export default Header; 