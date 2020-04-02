import React from 'react'

function FunctionClick() {
    function clickHandler(event){
        console.log(event);
    }
    return (
        <div>
            <button onClick={clickHandler}>click me</button>
            
        </div>
    )
}

export default FunctionClick
