import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
    render() {
        console.log('************************* pure component render *******************')
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>pure component</p>
            </div>
        );
    }
}

export default PureComp;