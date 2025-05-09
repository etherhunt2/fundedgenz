import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: 'What is Iko Crypto?',
            answer: 'Iko is a 100% pre-scratched cryptome. There are 1 Million Minutes, and 60% of them can be yours (60% - ICO). It is both a utility & security token that applies to all transactions and gives a monthly dividend.'
        },
        {
            question: 'How can I purchase Iko tokens?',
            answer: 'You can purchase Iko tokens through our ICO platform. We accept various payment methods including Bitcoin, Ethereum, and bank transfers.'
        },
        {
            question: 'What is the benefit of holding Iko?',
            answer: 'Users with Iko have lower system fees, potential price growth from demand for Unifox technologies, ownership stake in an international corporation, and monthly dividends.'
        },
        {
            question: 'When will the ICO start?',
            answer: 'The ICO will start as per the countdown timer on our homepage. You can also sign up for our newsletter to receive timely updates.'
        },
        {
            question: 'Is there a minimum investment amount?',
            answer: 'Yes, the minimum investment amount is $100. However, we recommend checking the current ICO terms as they may vary.'
        },
        {
            question: 'What is the roadmap for Iko?',
            answer: 'Our roadmap includes research, app beta testing, token testing, alpha testing, and concept development. Check our roadmap section for specific timelines.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to the most common questions about Iko Crypto</p>
                </div>

                <div className="faq-accordion">
                    {faqItems.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <div
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <span className="faq-icon">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer" style={{
                                maxHeight: activeIndex === index ? '500px' : '0'
                            }}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 