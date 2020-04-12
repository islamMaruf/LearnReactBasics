import React, {Component} from 'react';
import ChildOfLifeCycleB from "./ChildOfLifeCycleB";

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Maruf islam'
        }
        console.log('lifeCycleB constructors method ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifeCycleB getDerivedStateFromProps method ');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('lifeCycleB shouldComponentUpdate method ');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifeCycleB getSnapshotBeforeUpdate method ');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('lifeCycleB componentDidUpdate method ');
    }



    render() {
        console.log('lifeCycleB render method ');
        return (
            <div>
                <p>Life cycle b render</p>
                <ChildOfLifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleB;