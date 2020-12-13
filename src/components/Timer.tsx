import { useState, useEffect } from "react";
import TimerButton from "./TimerButton";

function Timer() {
  const [minute, setMinunte] = useState(30);
  const [second, setSecond] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (isOn) {
        if (second > 0) {
          setSecond((second) => second - 1);
        }
        if (second === 0) {
          if (minute === 0) {
            clearInterval(myInterval);
          } else {
            setSecond(59);
            setMinunte(minute - 1);
          }
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, [isOn, minute, second]);
  const startTimer = () => {
    setIsOn(true);
  };

  const stopTimer = () => {
    setIsOn(false);
  };

  const resetTimer = () => {
    setMinunte(30);
    setSecond(0);
    setIsOn(false);
  };
  return (
    <div className="Timer">
      <div className="TimeDisplay">
        <div>
          {minute}:{second < 10 ? `0${second}` : second}
        </div>
      </div>
      <div className="Buttons">
        <TimerButton buttonAction={startTimer} buttonValue={"Start"} />
        <TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
      </div>
    </div>
  );
}

export default Timer;
