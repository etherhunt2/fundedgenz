import React, { useState } from 'react';
import '../styles/tableSection.css';

const Comparison = () => {

    return (
        <section className="introduction-section">
            <div className="container">
                <div className="introduction-header">
                    <h2>Real Account Vs Funded Account</h2>
                </div>

                <div className="pricing-section">
                    <div className="funding-container">

                        <table className="funding-table">
                            <thead>
                                <tr>
                                    <th>Real Trading Account</th>
                                    <th>Funded Trading Account</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>You risk your own $10,000</td>
                                    <td>Trade with firm’s $10,000 capital</td>
                                </tr>
                                <tr>
                                    <td>One mistake = lose everything</td>
                                    <td>One mistake = lose small fee ($59)</td>
                                </tr>
                                <tr>
                                    <td>High emotional pressure</td>
                                    <td>Trade with confidence</td>
                                </tr>
                                <tr>
                                    <td>Slow account growth</td>
                                    <td>Fast capital scaling</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                            <button className="funding-button">Get Funded Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison; 