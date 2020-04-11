import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }
    }

    greetParent = (name) => {
        console.log(name);
        console.log(this.state.parentName)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
