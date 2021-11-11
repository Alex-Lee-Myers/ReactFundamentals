import React, { useState, useEffect } from 'react';

//TODO 8.6 Challenge
// * 1) Add Location text to your existing clock, for example, New York, or Indianapolis
// * 2) Add another clock and location in a different time zone. This can be anywhere you want.

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>{time}</p>
        </div>
    )
}

export default ClockApp;