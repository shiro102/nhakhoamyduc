import React, { useState, useEffect } from 'react';



const Delayed = ({ children, waitBeforeShow = 500 }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children :   <div className="loader-container">
        <div className="spinner"></div>
    </div>;
};

export default Delayed;