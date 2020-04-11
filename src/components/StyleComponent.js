import React from "react";
function StyleComponent(props) {
   const  heading = {
        fontSize : '72px',
       fontStyle : 'italic'
   }
    const {primary,children} = props;
    let className = primary ? 'primary': '';
    return (
        <div>
            <h2 style={heading}>yhi</h2>
            <h1 className={`${className} font-xl`}>Style sheets</h1>
            {children}
        </div>
    );

}
export default  StyleComponent;