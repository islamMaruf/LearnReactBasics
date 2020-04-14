import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        axios.get(url)
            .then(result => {
                this.setState({posts: result.data})
            }).catch(err => {
            this.setState({errorMessage: err.getMessage()})
        })


    }

    render() {
        let {posts,errorMessage} = this.state;
        return (
            <div>
                <h1>List of post</h1>
                {
                    posts.length ?
                        posts.map(post => <Post key={post.id} post={post}/>)
                        : null
                }
                {
                    errorMessage ? <div> {errorMessage} </div> : null
                }
            </div>
        );
    }
}

export default PostList;