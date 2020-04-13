import React from 'react';
import './Digit.css';

function Digit(props){

    return (
        <div className="text-color" style={{borderColor: props.color}}>
            <h1 style={{color: props.color}}>  { props.time < 10 ? `0${props.time}`: props.time}  </h1>
        </div>
    );

}

export default Digit;