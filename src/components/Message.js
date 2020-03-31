import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message :'Welcome Visitors'
        };
        // this.changeMessage = this.changeMessage.bind(this);
        
    }
    changeMessage = () => {
        this.setState( state => ({
            message :'Thanks for visiting us'
        }))
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>subscribe</button>
                </div>
        );
    }  
    
    

}

export default Message;