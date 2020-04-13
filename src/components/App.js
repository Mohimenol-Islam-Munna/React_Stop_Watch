import React,{ useState } from 'react';
import './App.css';

import Title from './Title/Title';
import Countdown from './countdown/countdown';
import Controller from './controller/controller';



function App() {

  const [vari, setMethod] = useState({

      time:[{
          min: 0,
          sec: 0,
          mili: 0
        }
      ]
  });
  
  const getHandler = ()=>{

      setInterval(()=>{

        let min=vari.time[0].min
        let sec=vari.time[0].sec
        let mili=vari.time[0].mili

        if(mili >= 10)
        {
          sec++;
          mili=0;
        }

        if( sec >= 60)
        {
          min++
          sec=0
        }

        setMethod({
          time:[
            {
              min: min, 
              sec: sec, 
              mili: mili + 1
            }
          ]
        });
      }, 100)


  }



  return (
    <div className="App">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
              <Title />
              <Countdown time={vari.time}/>
          </div>
        </div>
        <div>
            <Controller start={ ()=>getHandler()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
