import React,{useState} from 'react';
import {Message} from './message.js';
import Developer from './devloper';
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [isday, isnight] = useState(true)
  return (
    <div className ={`${isday?"day":"night"}`}> 
      <center>
      <h1>{`Good ${isday? "Morning": "Night"}`}</h1>
        
      <Message counter ={count}></Message>
        <br />
        <button onClick = {()=>setCount(++count)}>Udpate Counter</button>
        <br />
        <br />
        <button onClick = {()=>isnight(!isday)}>Day/Night</button>
        <br />
        <Developer programmer ="Muhammad Atique"></Developer>
      </center>
      
    </div>
  );
}

export default App;

