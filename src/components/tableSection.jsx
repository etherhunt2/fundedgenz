import React, { useState } from 'react';
import '../styles/tableSection.css';

const TableSection = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        <section className="introduction-section" id='plan'>
            <div className="container">
                <div className="introduction-header">
                    <h2>Choose Your Funding Plan</h2>
                </div>

                <div className="pricing-section">
                    <div className="pricing-buttons-container">
                        <div className="steps-buttons">
                            <button
                                className={`pricing-button ${activeButton === 0 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(0)}
                            >
                                Step 1
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 1 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(1)}
                            >
                                Step 2
                            </button>
                            <button
                                className={`pricing-button active`}
                            // onClick={() => handleButtonClick(2)}
                            >
                                Instant
                            </button>
                        </div>
                    </div>

                    <div className="pricing-buttons-container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <div className="pricing-buttons">
                            <button
                                className={`pricing-button active`}
                            // onClick={() => handleButtonClick(3)}
                            >
                                $5,000
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 4 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(4)}
                            >
                                $10,000
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 5 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(5)}
                            >
                                $25,000
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 6 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(6)}
                            >
                                $50,000
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 7 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(7)}
                            >
                                $100,000
                            </button>
                            <button
                                className={`pricing-button ${activeButton === 8 ? 'active' : ''}`}
                                onClick={() => handleButtonClick(8)}
                            >
                                $200,000
                            </button>
                        </div>
                    </div>

                    <div className="funding-container">
                        <div className="funding-header">
                            <div className="funding-amount">
                                <span className="funding-amount-text">Account Size</span>
                                <span className="funding-amount-value">$5,000</span>
                            </div>
                            <button className="funding-button">Get Funded Fee $35</button>
                        </div>

                        <table className="funding-table">
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>1 Step Challenge</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Max Drawdown</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Max Trading Days</td>
                                    <td>5 Days</td>
                                </tr>
                                <tr>
                                    <td>Min Trading Days</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Max Daily Drawdown</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Profit Target</td>
                                    <td>8%</td>
                                </tr>
                                <tr>
                                    <td>Payout Frequency</td>
                                    <td>10 Days</td>
                                </tr>
                                <tr>
                                    <td>Profit Share</td>
                                    <td>90%</td>
                                </tr>
                                <tr>
                                    <td>Leverage</td>
                                    <td>1:10</td>
                                </tr>
                                <tr>
                                    <td>Account Copy Trading</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Algo Trading</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                            <button className="funding-button">Get Funded Fee $35</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableSection; 