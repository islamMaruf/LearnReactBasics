import React, {Component} from 'react';
import ChildOfLifeCycleA from "./ChildOfLifeCycleA";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Maruf islam'
        }
        console.log('lifeCycleA constructors method ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifeCycleA getDerivedStateFromProps method ');
        return null;
    }

    componentDidMount() {
        console.log('lifeCycleA componentDidMount method ');
    }

    render() {
        console.log('lifeCycleA render method ');
        return (
            <div>
                <p>Life cycle a render</p>
                <ChildOfLifeCycleA/>
            </div>
        );
    }
}

export default LifeCycleA;