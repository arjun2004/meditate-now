import { useState } from "react";
import useSound from "use-sound";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import end from "./end.mp3";
import start from "./start.mp3";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
var aud;
function App() {
  return (
    <>
      <p className="timer" id="timer">
        1:00
      </p>
      <h1 className="btn" onClick={timer}>
        Meditate Now!
      </h1>
      <div className="footer">
        © <a href="https://www.github.com/arjun2004">github.com/arjun2004</a>
      </div>
    </>
  );
}
function timer() {
  play(start);
  var sec = 59;
  var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      play(end);
    }
  }, 1000);
}
function play(aud) {
  new Audio(aud).play();
}
export default App;
