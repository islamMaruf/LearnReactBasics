import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
       let $logged_message = ''
        if(this.state.isLoggedIn){
            $logged_message = 'user is logged in';
        }else{
            $logged_message = 'user is not logged in';
        }
        return (
            <div>
                <p>{$logged_message}</p>
            </div>
            )
        
    }
}


export default UserGreetings
