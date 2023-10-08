import React, { useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.css";


const App = () => {
  const [value, setValue] = useState("0 m");
  const [hideValue, setHideValue] = useState(false)
  function countDownTimer() {
    
    console.log("This" + value)
    if (value !== "0 m") {
      setHideValue(true)
      var countdownTime = value * 60;

      // function startCountdown() {
      // var countdownDisplay = document.getElementById("countdown");
  
      var countdownInterval = setInterval(function () {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;
        setValue(minutes + "m " +" : "+ seconds + "s")
        // countdownDisplay.innerHTML = minutes + "m " + seconds + "s";
  
        countdownTime--;
  
        if (countdownTime < 0) {
          clearInterval(countdownInterval);
          setValue("Time's up!");
        }
      }, 1000);
      // }
    }
   
  }
  return (
    <div className="main">
      <div className="un-main">
     
        <input type="number" placeholder="Enter  Minutes" onChange={(e) => setValue(e.target.value)} className={hideValue ? 'uncount' : 'countdown'} />
        <div className="countdown">{value}</div>
        <div className="div-cont">
          <button className="btn" onClick={countDownTimer}>
            <FontAwesomeIcon icon={faPlay} className="fa fa-home text-2xl text-center w-[30%]" />
          </button>
        </div>

      </div>
    </div>

  );
}

export default App;
