import React, {Component} from 'react';
import withCounter from "./WithCounter";
class ClickCounter extends Component {
    render() {
        const {count,incrementCount,name} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count}  times {name}</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter);