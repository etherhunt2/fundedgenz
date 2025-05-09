import React from 'react';

const Features = () => {
    return (
        <section className="features-section" id="feature">
            <div className="tg-bg-gradient bg-gradient-1">
                <img src="/images/bg-gradient1.png" alt="Background" />
            </div>

            <div className="container">
                <div className="features-header">
                    <div className="features-header-content">
                        <h2>The Most Trusted Funding Platform for Traders Worldwide</h2>
                    </div>
                    <div className="features-header-image">
                        <img src="https://iko-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_1-1.0b2942d6.png&w=256&q=75"
                            alt="Features"
                            className="alltuchtopdown"
                        />
                    </div>
                </div>

                <div className="features-content">
                    <div className="investment-details">
                        <div className="investment-summary">
                            <div className="investment-summary-item">
                                <h2>How It Works</h2>
                            </div>
                        </div>

                        <div className="investment-progress">
                            <img src="/works.png" alt="Features" className="alltuchtopdown" />
                            {/* <ul className="wcu-price-progress-wrap">
                                <li>
                                    <h6 className="progress-wrap-title">Expected FOX price</h6>
                                    <p className="progress-wrap-text">0.36 $</p>
                                    <div className="skill-feature">
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <div className="progress-value">
                                            <span>100 $</span>
                                            <span>100,000 $</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="wcu-price-progress-wrap">
                                <li>
                                    <h6 className="progress-wrap-title">Expected Ethereum price</h6>
                                    <p className="progress-wrap-text">0.80 $</p>
                                    <div className="skill-feature">
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <div className="progress-value">
                                            <span>100 $</span>
                                            <span>100,000 $</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="wcu-price-progress-wrap">
                                <li>
                                    <h6 className="progress-wrap-title">Calculation time</h6>
                                    <p className="progress-wrap-text">Q3 2020</p>
                                    <div className="skill-feature">
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <div className="progress-value">
                                            <span>100 $</span>
                                            <span>100,000 $</span>
                                        </div>
                                    </div>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="feature-cards">
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <img src="https://iko.themegenix.net/wp-content/uploads/2024/04/feature-icon3.svg" alt="Icon" />
                            </div>
                            <div className="feature-card-details">
                                <h4 className="feature-card-title">Step 1: Choose Your Funding Plan</h4>
                                <p className="mb-0">
                                    Start by selecting a funding model that suits your trading style — whether it’s our Evaluation Program or Instant Funding model. You get to choose from multiple account sizes ranging from $10,000 to $200,000.
                                </p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <img src="https://iko.themegenix.net/wp-content/uploads/2024/04/feature-icon2.svg" alt="Icon" />
                            </div>
                            <div className="feature-card-details">
                                <h4 className="feature-card-title">Step 2: Prove Your Skills</h4>
                                <p className="mb-0">
                                    Evaluation Model, showcase your trading consistency by meeting our profit targets while staying within the risk limits. We don’t rush — take your time and trade like a pro.
                                </p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <img src="https://iko.themegenix.net/wp-content/uploads/2024/04/feature-icon1.svg" alt="Icon" />
                            </div>
                            <div className="feature-card-details">
                                <h4 className="feature-card-title">Step 3: Get Funded</h4>
                                <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <img src="https://iko.themegenix.net/wp-content/uploads/2024/04/feature-icon1.svg" alt="Icon" />
                            </div>
                            <div className="feature-card-details">
                                <h4 className="feature-card-title">Step 4: Withdraw Profits</h4>
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 