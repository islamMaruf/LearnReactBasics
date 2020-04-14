import React, {Component} from 'react';
import axios from 'axios';

class PostFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {userId, title, body} = this.state;
        const url = `https://jsonplaceholder.typicode.com/posts`;
        axios.post(url, this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        const {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default PostFrom;