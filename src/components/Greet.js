import React from 'react';
const Greet = props => {
    const { name,children} = props
    console.log(props)
    return (
    <div>
        <h1> hello  {name} </h1>
        {children}
    </div>
    );
}
export default Greet;