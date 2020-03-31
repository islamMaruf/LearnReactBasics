import React, { Component } from 'react'

 class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
     
    }
    increaseCount = () => {
        this.setState({
            count : this.state.count +1
        })
    }
    decreaseCount = () => {
        if(this.state.count >= 0){
            this.setState({
            count: --this.state.count 
            })     
        }
        
        
    }
    
    render() {
        return (
            <div>
                count - {this.state.count} <br/>  
                <button onClick={ this.increaseCount }>+</button>
                <button style={{marginLeft : '5px'}} onClick={this.decreaseCount}>-</button>
            </div>
        )
    }
}

export default Counter
