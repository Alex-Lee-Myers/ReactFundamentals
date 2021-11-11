import React, { useState, useEffect } from 'react';

const TimerApp = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    })

    const tick = () => setSecondsElapsed(secondsElapsed + 1);
    return (
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElapsed}</div>
        </div>
    )
}

export default TimerApp;