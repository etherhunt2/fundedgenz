import React from 'react';

const Invest = () => {
    const investOptions = [
        {
            icon: "/1.png",
            text: "Enclose BTC"
        },
        {
            icon: "2.png",
            text: "Enclose ETH"
        },
        {
            icon: "3.png",
            text: "Bank Transfer"
        }
    ];

    return (
        <section className="invest-section">
            <div className="container">
                <div className="invest-header">
                    <h2>Learn Forex & Crypto Trading Absolutely Free</h2>
                </div>
                <div className="invest-description">
                    <p>
                        Taking a funded account, huh? Nobody teaches you after that.
                        No funded company teaches you how to trade.
                        But we do Once you secure a funded account, we will provide
                        comprehensive training in Forex and Crypto trading, equipping
                        you with the knowledge and skills to excel in the market.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                        <a href='/signup' className="funding-button">Get Funded Now</a>
                    </div>
                </div>
                <hr className='invest-divider' />
                <div className="invest-header">
                    <h2>Seamless Payouts, Timely Earnings</h2>
                </div>
                <div className="invest-description">
                    <p>At FundedGenz, we prioritize transparency and efficiency when it comes to payouts.
                        Once you meet the profit target and trading criteria, you’ll be eligible to withdraw your earnings.
                        Our clear payout structure ensures that you receive your share quickly and securely</p>
                </div>
                <div className="invest-options">
                    {investOptions.map((option, index) => (
                        <div key={index} className="invest-card">
                            <div className="invest-card-icon">
                                <img src={option.icon} alt={`Investment Option ${index + 1}`} />
                            </div>
                            {/* <a className="btn btn3" href="/blog/">{option.text}</a> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Invest;