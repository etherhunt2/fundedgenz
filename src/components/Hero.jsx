import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
const waveExpand = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const RocketContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
`;

const Wave = styled.div`
  position: absolute;
  top: -350px;
  left: -20%;
  transform: translateX(-50%) rotateZ(40deg);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  border: 2px solid rgba(255, 105, 180, 0.6);
  background: transparent;
  animation: ${waveExpand} 3s ease-out infinite;

  &:nth-child(2) {
    animation-delay: 2.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

const Hero = () => {
    const [countdownData, setCountdownData] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2024/9/29 12:34:56').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdownData({ days, hours, minutes, seconds });
            }
        };

        // Initial update
        updateCountdown();

        // Set up interval
        const interval = setInterval(updateCountdown, 1000);

        // Clean up
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-section">
            <div className="hero-bg-gradient"></div>
            <div className="ripple-shape">
                <span className="ripple-1"></span>
                <span className="ripple-2"></span>
                <span className="ripple-3"></span>
                <span className="ripple-4"></span>
                <span className="ripple-5"></span>
            </div>

            <div className="container">
                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        <h2>Get $2,00,000 Funded

                            Instant Account With

                            Free Forex Crypto Trading

                            Course</h2>
                        <div className="hero-buttons gap-y-[10px]">
                            <a href="#plan" className="btn btn2 show-arrow" style={{ zIndex: 1 }}>Start Challenge</a>
                            <a href="#footer" className="btn show-arrow" style={{ zIndex: 1 }}>Contact Us</a>
                        </div>
                    </div>

                    <div className="hero-image">
                        {/* <img
                            src="/images/roket.png"
                            alt="Rocket"
                            className="alltuchtopdown"
                        /> */}
                        <svg viewBox="0 0 24 24" className='alltuchtopdown'>
                            <path d="M12 2.5s-4 3.5-4 8.5c0 2.3 1 4.2 2 5.5.7-2.7 1.5-4 2-4s1.3 1.3 2 4c1-1.3 2-3.2 2-5.5 0-5-4-8.5-4-8.5zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill='white' />
                        </svg>
                        <Wave />
                        <Wave />
                        <Wave />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 