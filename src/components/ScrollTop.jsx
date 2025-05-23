import React, { useEffect, useState } from 'react';
import { LuMoveUp } from "react-icons/lu";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`scroll-top scroll-to-target ${visible ? 'active' : ''}`}
            onClick={scrollToTop}
            style={{ display: visible ? 'block' : 'none' }}
        >
            <LuMoveUp size={20} />
        </button>
    );
};

export default ScrollTop; 