import React from 'react';

const Team = () => {
    const founders = [
        {
            image: "/images/founder-1.png",
            name: "Michael Liam",
            position: "Founder & CEO",
            socials: [
                { icon: "fab fa-linkedin-in", url: "#" },
                { icon: "twitter", url: "#", isSvg: true },
                { icon: "fab fa-youtube", url: "#" }
            ]
        },
        {
            image: "/images/founder-2.png",
            name: "William Xeno",
            position: "Founder & CEO",
            socials: [
                { icon: "fab fa-linkedin-in", url: "#" },
                { icon: "twitter", url: "#", isSvg: true },
                { icon: "fab fa-youtube", url: "#" }
            ]
        }
    ];

    const teamMembers = [
        { image: "/images/team-1.png", name: "Floyd Miles", position: "Marketer" },
        { image: "/images/team-2.png", name: "Eleanor Pena", position: "Founder & CEO" },
        { image: "/images/team-3.png", name: "Arlene McCoy", position: "Technology Officer" },
        { image: "/images/team-4.png", name: "Robert Fox", position: "Financial Officer" },
        { image: "/images/team-5.png", name: "Elizabeth", position: "Technical Support" },
        { image: "/images/team-6.png", name: "James Mateo", position: "Financial Officer" },
        { image: "/images/team-7.png", name: "Robert Joseph", position: "CTO Officer" },
        { image: "/images/team-8.png", name: "Amelia Ava", position: "Marketing Officer" },
        { image: "/images/team-9.png", name: "Charles John", position: "Financial Officer" },
        { image: "/images/team-10.png", name: "Isabella Mia", position: "Financial Officer" }
    ];

    // SVG for Twitter
    const twitterSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M9.52219 6.77491L15.4786 0H14.0671L8.89518 5.88256L4.76438 0H0L6.24657 8.89547L0 16H1.41155L6.87322 9.78779L11.2356 16H16L9.52219 6.77491ZM7.58888 8.97384L6.95597 8.08805L1.92015 1.03974H4.08821L8.15218 6.72796L8.78508 7.61374L14.0677 15.0076H11.8997L7.58888 8.97384Z"
                fill="currentColor"></path>
        </svg>
    );

    return (
        <section className="team-section">
            <div className="tg-bg-gradient bg-gradient-3 right-0">
                <img src="/images/bg-line.png" alt="Background" />
            </div>

            <div className="container">
                <div className="team-header">
                    <h2>Active founders</h2>
                </div>

                <div className="founders-container">
                    {founders.map((founder, index) => (
                        <div key={index} className="founder-card">
                            <div className="founder-card-img">
                                <img src={founder.image} alt={founder.name} />
                            </div>
                            <div className="founder-card-details">
                                <h3 className="founder-card-title">{founder.name}</h3>
                                <p className="founder-card-desig">{founder.position}</p>
                                <div className="social-btn">
                                    {founder.socials.map((social, idx) => (
                                        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
                                            {social.isSvg ? twitterSvg : <i className={social.icon}></i>}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="team-members-container">
                    <ul className="team-tab-list">
                        {teamMembers.map((member, index) => (
                            <li key={index}>
                                <div className="team-card">
                                    <div className="team-card_img">
                                        <img src={member.image} alt={member.name} />
                                        <div className="social-btn">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-card_content">
                                        <h3 className="team-card_title">{member.name}</h3>
                                        <span className="d-block mt-2">{member.position}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Team; 