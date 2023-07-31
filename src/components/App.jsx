import React, { useState } from "react";




function App() {
  setInterval(updateTime, 1000)
  const time = new Date().toLocaleTimeString();
const [now, setTime] = useState(time);
function updateTime(){
  const newtime = new Date().toLocaleTimeString();
  setTime(newtime);
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
