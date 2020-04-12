import React, {Component} from 'react';
import FRInput from "./FRInput";

class FRParent extends Component {
    constructor(props) {
        super(props);
        this.currentRef = React.createRef();
    }
    focusInput = () => {
      this.currentRef.current.focus();
    };
    render() {
        return (
            <div>
                <FRInput ref={this.currentRef}/>
                <button onClick={this.focusInput} >Focus Input </button>
            </div>
        );
    }
}

export default FRParent;