import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <h1>{this.props.render(false)}</h1>
            </div>
        );
    }
}

export default User;