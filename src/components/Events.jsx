import React from 'react';

const Events = () => {
    const events = [
        {
            image: "/images/event1.webp",
            title: "Block Vienna",
            location: "Venna",
            date: "August 17, 2024"
        },
        {
            image: "/images/event2.webp",
            title: "Summit Summits",
            location: "USA",
            date: "June 12, 2024"
        },
        {
            image: "/images/event3.webp",
            title: "Blockchain Summit",
            location: "London",
            date: "August 12, 2024"
        },
        {
            image: "/images/event4.webp",
            title: "Economy ICO 2024",
            location: "Costa Rica",
            date: "September 24, 2024"
        },
        {
            image: "/images/event5.webp",
            title: "DC Blockchain Summit",
            location: "Brazil",
            date: "September 24, 2024"
        },
        {
            image: "/images/event6.webp",
            title: "Block Conference",
            location: "Dallas, USA",
            date: "October 24, 2024"
        },
        {
            image: "/images/event7.webp",
            title: "Futurist Conference",
            location: "Dubai, UAE",
            date: "October 24, 2024"
        },
        {
            image: "/images/event8.webp",
            title: "Block Chain Expo",
            location: "Washington DC",
            date: "October 24, 2024"
        }
    ];

    const pressItems = [
        {
            logo: "/images/press-1.svg",
            title: "huffpost.com",
            text: "UniFox seeks to incorporate cryptocurrencies into everyday life through the introduction of their autonomous design."
        },
        {
            logo: "/images/press-2.svg",
            title: "msnbc.com",
            text: "In excellence from Tether or love another \"stable\" crippling. Unicash can easily be converted to local currency by special bankers"
        },
        {
            logo: "/images/flow.svg",
            title: "flowon.com",
            text: "UniFox seeks to incorporate cryptocurrencies into everyday life through the introduction of their autonomous design."
        }
    ];

    return (
        <section className="events-section">
            <div className="tg-bg-gradient bg-gradient-4 right-0">
                <img src="/images/bg-gradient2.png" alt="Background" />
            </div>

            <div className="container">
                <div className="events-header">
                    <h2>Join Events for meet us</h2>
                </div>

                <div className="events-grid">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-card-img">
                                <a href="/contact/">
                                    <img src={event.image} alt={event.title} />
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title">{event.title}</h4>
                                <div className="event-meta">
                                    <span>
                                        <i className="genix flaticon-location"></i> {event.location}
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i> {event.date}
                                    </span>
                                </div>
                                <a href="/contact/" className="btn btn3">Join Us</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="press-container">
                    <div className="press-header">
                        <h2>Press us</h2>
                    </div>

                    <div className="cta-slider1 row">
                        {pressItems.map((item, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="cta-wrap1">
                                    <div className="cta-wrap-details">
                                        <img src={item.logo} alt={item.title} />
                                        <h3 className="cta-wrap-title">{item.title}</h3>
                                        <p className="cta-wrap-text">{item.text}</p>
                                    </div>
                                    <a className="btn btn4" href="/blog/">READ MORE</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events; 