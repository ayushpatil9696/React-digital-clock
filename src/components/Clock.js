import React, { useEffect, useState } from "react";

const Clock = () => {

    const [state, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());

        }, 1000);
        
    }, []);




    return(
        <div style={{ fontsize: "55px", margin: "60px" }}>
            {state}
        </div>
    );
}

export default Clock;