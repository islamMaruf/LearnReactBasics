import React, {Component} from 'react';
import axios from 'axios';
import Post from './Post'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        axios.get(url)
            .then(result => {
                this.setState({posts: result.data})
            })


    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                <h1>List of post</h1>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default PostList;