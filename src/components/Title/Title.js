import React, { Component } from 'react'
import './Title.css'

class title extends Component{
constructor(props){
    super(props);

    this.state = {

        title: "React Stop Watch",
        isInput: false
    }
}
   

    editHandler = () =>{

        this.setState({
            ...this.state,
            isInput: true,

        })

    }

    updateHandler = (event) => {
        this.setState({
            ...this.state,
            title: event.target.value,
        })
    }


    keyPressHandler = (event) => {
        if(event.key ==='Enter')
        {
            this.setState({

                isInput: false
                
            })
            
        }
    }






    render(){

        let output = null;

        if(this.state.isInput){

            output = (
                <div>
                    <input type="text" 
                           onChange={ this.updateHandler } 
                           onKeyPress={ this.keyPressHandler } 
                           value={ this.state.title }
                           className="form-control" />
                     <h3>{ this.state.title }</h3>
                </div>
            )


        }else{
            output = (
                <div className="d-flex tle">
                    <h1 className="display-4">{ this.state.title }</h1>
                    <span onClick={this.editHandler} className="ml-auto edit">
                         <button className="btn btn-sm btn-danger">Edit Title</button>
                    </span>
                </div>
            )
        }




        return(
            <div >
                {output}
            </div>
        )
    }
}

export default title
