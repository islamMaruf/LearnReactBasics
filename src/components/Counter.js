import React, { Component } from 'react'

 class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             count : 0
        }
     
    }
    
    decreaseCount = () => {
        this.setState(state => ({
            count : state.count--
        }))
    }
    
    
render() {
        return (
            <div>
                count - {this.state.count} <br/>  
                <button onClick={this.decreaseCount}>-</button>
            </div>
        )
    }
}

export default Counter
