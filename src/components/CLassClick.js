import React, { Component } from 'react'

class CLassClick extends Component {
    clickHandler(){
      console.log('clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >clickMeClass</button>
            </div>
        )
    }
}

export default CLassClick
