import React, {Component} from 'react';

class FromComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comments : '',
            topic : ''
        };
        this.handelTextArea =  this.handelTextArea.bind(this);
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    handelTextArea(event){
        this.setState({comments: event.target.value})
    }
    handelTopicChange = event => {
        this.setState({topic : event.target.value})
    }
    handelCheckbox = event => {
        console.log(event.target.value)
    }
    handelFrom = event => {
        event.preventDefault();
       console.log(this.state)

    }

    render() {
        const {username,comments,topic} = this.state;
        return (
            <div>
                <form onSubmit={this.handelFrom}>
                    <div>
                        <label>Username </label> <br/>
                        <input type="text" name="username" value={username} onChange={this.changeUsername}/>
                        <div>{username}</div>
                    </div>
                    <div>
                        <label>Comments </label> <br/>
                        <textarea name="comments" value={comments} onChange={this.handelTextArea}/>
                        <div>{comments}</div>
                    </div>
                    <div >
                        <label> Select Topic </label> <br/>
                        <select value={topic}  name="topic" onChange={this.handelTopicChange}>
                            <option value="react">REACT</option>
                            <option value="angular">ANGULAR</option>
                            <option value="vue">VUE</option>
                        </select>
                        <div>{ topic}</div>

                    </div>
                    <div>
                        <label> Are you agree</label>
                        <input type="checkbox" name="agree"  onChange={this.handelCheckbox} />Yes
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FromComponent;