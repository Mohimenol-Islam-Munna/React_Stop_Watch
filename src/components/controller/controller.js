import React, { Component } from 'react';

class Controller extends Component{
    constructor(props){
        super(props);

        this.state= {

            Start: true,
            Pause: false,
            Lap: false,
            Reset: false
        }

    }

    
    resetHandler = ()=>{
        this.setState({
            ...this.state,
            Start: true,
            Reset:false
        })
    }

    lapHandler = ()=>{
        this.setState({
            ...this.state,
            Pause: false,
            Lap: false,
            Reset: false
        
        })
    }


    pauseHandler = ()=>{

        this.setState({
            ...this.state,
            Start: true,
            Pause: false,
            Lap: false,
            Reset: true

        })


    }


    startHandler = ()=>{
        this.setState({
            ...this.state,
            Start: false,
            Pause: true,
            Lap: true
        });

        this.props.start()
    }


   setController = () => {
        
        let output = null

        if(this.state.Start && !this.state.Reset){
            output = ( 
                <div>
                    <a className="btn btn-success btn-lg px-4" onClick={  this.startHandler  }>Start</a>
                </div>
            )
        }
        else if(this.state.Pause && this.state.Lap)
        {
            output = ( 
                <div>
                    <div>         
                        <a className="btn btn-primary btn-lg px-4 mr-5" onClick={  this.pauseHandler  }>Pause</a>
                        <a className="btn btn-warning btn-lg px-4 mx-5" onClick={  this.lapHandler  }>Lap</a>
                    </div>
                </div>
            )
        }
        else if( !this.state.Start && !this.state.Reset)
        {
           output = (
               <div>
                    <div>         
                        <a className="btn btn-primary btn-lg px-4 mr-5" onClick={  this.pauseHandler  }>Pause</a>
                        <a className="btn btn-warning btn-lg px-4 mx-5" onClick={  this.lapHandler  }>Lap</a>
                    </div>
                    <div className="my-3" style={{borderTop: "3px solid lightgrey"}}>
                        <h1><span>min: 00 </span><span>sec: 00 </span><span>mili: 00 </span></h1>
                    </div>
                </div>
           )
        }
        else if(this.state.Start && this.state.Reset)
        {
            output = (
                <div>
                    <a className="btn btn-success btn-lg px-4 mr-5" onClick={  this.startHandler  }>Start</a>
                    <a className="btn btn-danger btn-lg px-4 mx-5" onClick={  this.resetHandler  }>Reset</a>
                </div>
            )

        }




        return output
           
            
    }

    render(){
        return (
            <div style={{marginLeft: "160px" , padding: "30px"}}>
                <div>
                    { this.setController() }
                </div>
            </div>
        );
    };

}

export default Controller;