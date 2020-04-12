import React, {Component} from 'react';

class RegularComp extends Component {
    render() {
        console.log('************************* regular component render *******************')
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>regular component</p>
            </div>
        );
    }
}

export default RegularComp;