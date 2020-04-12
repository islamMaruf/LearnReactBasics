import React, {Component} from 'react';
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentOfPureAndRegularComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'maruf'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'marufa'
            })
        }, 2000)
    }

    render() {
        console.log('************************* parent component render *******************');
        return (
            <div>
                <p>Parent component</p>
                <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentOfPureAndRegularComp;