import { useState } from "react";

const Timer = () => {
  const [hr, setHr] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  let coundownTimer;

 
  // const stopInterval = () => {
  //   clearInterval(coundownTimer)
  // }
  // console.log(sec, typeof(sec))
  const timer = () => {


    if (sec > 60){
      setMin(min ? +min + 1 : 1)
      setSec(+sec-59)
    } 
    if (min > 60) {
      setHr(hr ? +hr + 1 : 1)
      setMin(+min-59)
    }

    
    else if (sec != 0) {
      setSec(sec-1)
    }
    else if (sec != 0) {
      setSec(`${sec <= 10 ? "0" : ""}${+sec - 1}`)
    } else if (min != 0 && sec == 0) {
      setSec(59);
     setMin(`${min <= 10 ? "0" : ""}${+min - 1}`);
    } else if (hr != 0 && min == 0) {
      setMin(60);
      setHr(`${hr <= 10 ? "0" : ""}${+hr - 1}`);
    }
    return
  }
  const handleOnClick = (event) => {
    event.preventDefault();
    if (!hr && !min && !sec) {
      return
    }
   
    const startInterval = () => {
      coundownTimer = setInterval(()=> timer() , 1000)
    }
    startInterval()
  }
  // 
  return (
    <div>
      <h1>Countdown Timer</h1>
      <form>
        <div>
          <label>
            <span>Hours</span>
            <input
              type='text'
              maxLength={2}
              placeholder="00"
              onInput={(e) => setHr(e.target.value)}
              value={hr}
            />
          </label>
          <label>
            <span>Minutes</span>
            <input
              type='text'
              maxLength={2}
              placeholder="00"
              onInput={(e) => setMin(e.target.value)}
              value={min}
            />
          </label>
          <label>
            <span>Seconds</span>
            <input
              type='text'
              maxLength={2}
              placeholder="00"
              onChange={(e) => {
                console.log(e.target.value)
                setSec(e.target.value)
              }}
              value={sec}
            />
          </label>
        </div>
        <div>
          <button onClick={handleOnClick}>Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
  
};

export default Timer