import React, {Component} from 'react';

class ChildOfLifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Maruf islam'
        }
        console.log('lifeCycleA child constructor method')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifeCycleA child getDerivedStateFromProps method');
        return null;
    }

    componentDidMount() {
        console.log('lifeCycleA child componentDidMount method ');
    }

    render() {
        console.log('lifeCycleA child render method')
        return (
            <div>
                <p>Life cycle a child render</p>
            </div>
        );
    }
}

export default ChildOfLifeCycleA;