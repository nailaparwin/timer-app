import React, { useState } from 'react'
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
}
function Controls(props: Props) {
    const { setTimeInSeconds } = props;
    const [isOn, setIsOn] = useState(false);
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        if (!isOn){
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState+1);
        }, 1000);
        setIsOn(true);
        setIntervalId(interval);
        }
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
        setIsOn(false);
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
        setIsOn(false);
    }
    
    return (
        <section className="controls-container">
            <button className="left" onClick={handlePlayButton} id='play'>Play</button>
            <button className="center" onClick={handleStopButton} id='pause'>Pause</button>
            <button className="right" onClick={handleResetButton} id='reset'>Reset</button>
        </section>
    )
}

export default Controls;