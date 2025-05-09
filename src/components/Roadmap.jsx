import React from 'react';

const Roadmap = () => {
    const roadmapItems = [
        {
            date: 'End of Q4 2021',
            title: 'Research',
            description: 'SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations'
        },
        {
            date: 'End of Q6 2021',
            title: 'App Beta Test',
            description: 'SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations'
        },
        {
            date: 'End of Q5 2022',
            title: 'Token Test',
            description: 'SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations'
        },
        {
            date: 'End of Q4 2022',
            title: 'Alpha Test',
            description: 'SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations'
        },
        {
            date: 'End of Q4 2023',
            title: 'Concept',
            description: 'SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations'
        }
    ];

    return (
        <section className="roadmap-section" id="roadmap">
            <div className="tg-bg-gradient bg-gradient-2">
                <img src="/images/bg-gradient1.png" alt="Background" />
            </div>

            <div className="container">
                <div className="roadmap-header">
                    <h2>Our Roadmap</h2>
                    <div className="icon-box"></div>
                </div>

                <div className="roadmap-content">
                    <div className="row g-0 roadMap-active2 roadmap-slider1">
                        {roadmapItems.map((item, index) => (
                            <div key={index} className="col-lg-4">
                                <div className="roadmap-item">
                                    <span className="roadmap-title">{item.date}</span>
                                    <div className="roadmap-content">
                                        <h4 className="title">
                                            <span className="dot"></span>
                                            {item.title}
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap; 