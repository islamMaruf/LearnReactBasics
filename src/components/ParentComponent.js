import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName : 'parent'
        }
    }

    greetParent = (naem) => {
        console.log(naem);
        console.log(this.state.parentName)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
