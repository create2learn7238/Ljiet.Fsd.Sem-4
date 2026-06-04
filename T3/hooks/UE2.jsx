import { useEffect, useState } from "react";

function UE2() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Current Time: {time.toLocaleTimeString()}</h1>
            <h2>Hours: {time.getHours()}</h2>
            <h2>Minutes: {time.getMinutes()}</h2>
            <h2>Seconds: {time.getSeconds()}</h2>
        </div>
    );
}

export default UE2;
