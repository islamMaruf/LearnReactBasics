import React, {Component} from 'react';
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

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
                name: 'new maruf'
            })
        }, 2000)
    }

    render() {
        console.log('************************* parent component render *******************');
        return (
            <div>
                <p>Memo component </p>
                <MemoComp name={this.state.name}/>
                {/*<p>Parent component</p>*/}
                {/*<PureComp name={this.state.name}/>*/}
                {/*<RegularComp name={this.state.name}/>*/}
            </div>
        );
    }
}

export default ParentOfPureAndRegularComp;