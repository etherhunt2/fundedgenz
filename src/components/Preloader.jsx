import React, { useEffect } from 'react';

const Preloader = () => {
    useEffect(() => {
        // Hide preloader after page load
        const preloader = document.getElementById('preloader');
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // If page already loaded, hide preloader
        if (document.readyState === 'complete') {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, []);

    return (
        <div id="preloader">
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    );
};

export default Preloader; 