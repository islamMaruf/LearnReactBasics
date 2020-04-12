import React, {Component} from 'react';


class ChildOfLifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Maruf islam'
        }
        console.log('childOfLifeCycleB constructors method ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('childOfLifeCycleB getDerivedStateFromProps method ');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('childOfLifeCycleB shouldComponentUpdate method ');
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('childOfLifeCycleB getSnapshotBeforeUpdate method ');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('childOfLifeCycleB componentDidUpdate method ');
    }



    render() {
        console.log('childOfLifeCycleB render method ');
        return (
            <div>
                <p>childOfLifeCycleB render</p>
             
            </div>
        );
    }
}

export default ChildOfLifeCycleB;