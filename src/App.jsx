import { useState } from "react"
import './App.css'

function App() {
const [time,setTime]=useState({hr:0,minute:0,sec:0,mili:0})
const [status,setstatus]=useState()

const Start=()=>{
myfun();
setstatus(setInterval(myfun,10))
  
}
const Stop = () => {
  clearInterval(status)
}

const Reset = () => {
  clearInterval(status);
  setTime({hr:0,minute:0,sec:0,mili:0})
}
let hour=time.hr;
let minutes=time.minute;
let second=time.sec;
let milisecond=time.mili;

function myfun(){
if(milisecond===100){
  
  second++
  milisecond=0
}
if(second===60){
  minutes++
  second=0
}
if(minutes===60){
  minutes=0
  hour++
}
milisecond++
return setTime({hr:hour,minute:minutes,sec:second,mili:milisecond})
}


  return (
    <>
    <h1>Stop Watch</h1>
    <div className="main">
    <h1>{`${time.hr}: ${time.minute} :${time.sec} :${time.mili}`}</h1>
     <button onClick={Start}>Start</button>
     <button onClick={Stop}> Stop</button>
     <button onClick={Reset}> Reset</button>
    </div>
    </>
  )
}

export default App
