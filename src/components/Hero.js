import React from "react";

function Hero(props) {
        if(props.name === 'joker'){
            throw new Error('Hero not found')
        }
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
}

export default Hero;