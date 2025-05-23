import React, { useState, useEffect } from 'react'
import '../styles/testimonial.css'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Clean up
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const testimonials = [
        {
            id: 1,
            text: "This platform completely transformed how I manage my crypto investments. The intuitive interface and real-time tracking have saved me countless hours. I've seen a 20% increase in returns since I started using it!",
            name: "Kinjal Mehta",
            company: "Tech Innovations Inc.",
            image: "kinjal.jpeg"
        },
        {
            id: 2,
            text: "I was struggling to find a platform that would support my trading journey, but FundedGenz gave me the opportunity to prove my skills without risking my own capital. The team's ongoing mentorship and expert training in crypto and forex have been invaluable. Thanks to them, I'm now seeing consistent returns!",
            name: "Amit Patil",
            company: "Forex Trader",
            image: "amit.jpeg"
        },
        {
            id: 3,
            text: "Joining FundedGenz was the best decision I made. The combination of a funded account, personalized coaching, and a transparent payout structure has been a game changer for me. It's empowering to trade with confidence knowing I have the resources and support to succeed.",
            name: "Bablu Mishra",
            company: "Crypto Trader",
            image: "bablu.jpeg"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const slidePercentage = isMobile ? 100 : 33.333;

    return (
        <section className="testimonials-container">
            <div className="container">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                    <p>Hear It From Our Community</p>
                </div>

                <div className="testimonials-slider">
                    <div
                        className="testimonials-track"
                        style={{ transform: `translateX(-${currentIndex * slidePercentage}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div className="testimonial-card" key={testimonial.id}>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                    <div className="testimonial-author">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="author-image"
                                        />
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="navigation-buttons">
                    <button className="nav-button" onClick={prevSlide} style={{ fontSize: '24px' }} >
                        &#8592;
                    </button>
                    <button className="nav-button" onClick={nextSlide} style={{ fontSize: '24px' }}>
                        &#8594;
                    </button>
                </div>

                <div className="dots">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials