import React from 'react';

const Hello = (props) => {
    return (
        React.createElement('div',
        {id : 'newdiv',className : 'newdev'},
        React.createElement('h1',null,'hello '+ props.name)
        )
       
    );
}

export default Hello;