import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

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
                                                <img src="/logo.png" alt="FundedGenZ" />
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
                                                    <a href="#faq">FAQ</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/signup">Affiliate</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#plan">Challenges</a>
                                                </li>
                                                {/* <li className="menu-item menu-item-has-children">
                                                    <a href="/blog/">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item"><a href="/blog/">Our Blog</a></li>
                                                        <li className="menu-item"><a href="/blog-details/">Blog Details</a></li>
                                                    </ul>
                                                </li> */}
                                                <li className="menu-item">
                                                    <a href="#footer">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-lg-block">
                                            <ul className="list-wrap">
                                                <li className="header-login">
                                                    <a className="btn2" href="/signup">Register</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                            <RiMenu3Fill />
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
                        <IoMdCloseCircle />
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
                                <a className="btn2" href="/signup">Register</a>
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