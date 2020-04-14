    import React, {Component} from 'react';

    class Post extends Component {

        render() {
            const {title, body} = this.props.post;
            return (
                <div>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            );
        }
    }

    export default Post;