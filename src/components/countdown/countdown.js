import React from 'react';
import Digit from './Digit/Digit';

function Countdown(props){
    return (
      <div>
           <Digit time={props.time[0].min} color="palegreen"/> 
           <Digit time={props.time[0].sec} color="skyblue"/> 
           <Digit time={props.time[0].mili} color="salmon"/> 
      </div>
    );
}

export default Countdown;