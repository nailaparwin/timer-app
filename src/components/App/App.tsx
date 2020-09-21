import React, { useState, useEffect } from 'react';
import './App.css';
import calculateTimer from './../CalculateTime';
import Controls from './../Controls/Controls';

function App() {
  const [time, setTime] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

 useEffect(()=>{
 let timeArray: Array<number|string> = calculateTimer(time);
 setTimerArray(timeArray);
 }, [time]);

  return (
    <main>
      <section className="time-container">
        <p className="timer-text" id="t1">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>      
      </section>
      <Controls setTimeInSeconds={setTime}/>
    </main>
    
    
  );
}

export default App;
