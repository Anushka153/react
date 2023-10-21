import { useState } from "react";

const Timer = () => {
  const [hr, setHr] = useState()
  const [min, setMin] = useState()
  const [sec, setSec] = useState()
  

  const handleOnClick = () => {
    if (!hr && !min && !sec) {
      return
    }
   
    const startInterval = () => {
      coundownTimer = setInterval(() => timer(), 1000)
    }
    startInterval()
  }

  const timer = () => {
    // if ()
  }
  // 
  return (
    <div>
      <h1>Countdown Timer</h1>
      <div style={{ flexDirection: 'row' }}>
        <h3>hours</h3>
        <h3>minutes</h3>
        <h3>second</h3>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <input 
        type='text'
          maxLength={2}
          placeholder="00"
          onChange={(e) => setHr(e.target.value)}
          value={hr} />
        <input
          type='text'
          maxLength={2}
          placeholder="00"
          value={min}
          onChange={(e) => {
            if (e.target.value > 60) {
      setHr(hr ? hr + 1 : 1)
      setMin(min-59)
    }}} />
        <input type='text' maxLength={2} placeholder="00" value={sec} onChange={(e)=> { if (e.target.value > 60){
      setMin(min ? min + 1 : 1)
      setSec(sec-59)
    }
   }}/>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <button onClick={handleOnClick}>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Timer