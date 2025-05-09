import React from 'react';
import '../styles/partners.css';

const Partners = () => {
    const partners = [
        {
            logo: "/images/client-5.svg",
            description: "Stable crypto currency and an important part of the UniFox ecosystem"
        },
        {
            logo: "/images/press-2.svg",
            description: "Online exchanger, specializing in the exchange of private individuals"
        },
        {
            logo: "/images/client-2.svg",
            description: "A company that provides all IT services within the ecosystem of UniFox"
        },
        {
            logo: "/images/client-4.svg",
            description: "Stable crypto currency and an important part of the UniFox ecosystem"
        },
        {
            logo: "/images/client-3.svg",
            description: "Stable crypto currency and an important part of the UniFox ecosystem"
        }
    ];

    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-header">
                    <h2>Our partners</h2>
                </div>

                <div className="slider-area">
                    <div className="row g-0 partner-slider1">
                        {partners.map((partner, index) => (
                            <div key={index} className="col-lg-4">
                                <div className="partner-card">
                                    <div className="partner-card-img">
                                        <img src={partner.logo} alt={`Partner ${index + 1}`} />
                                    </div>
                                    <p className="partner-card-text">{partner.description}</p>
                                    <a className="btn btn3" href="/blog/">EXPLORE</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners; 