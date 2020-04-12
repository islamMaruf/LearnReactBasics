import React from "react";

function MemoComp({name}) {
    console.log('rendering memo component');
    return (
        <div>
            <p>name : {name}</p>
        </div>

    )
}

export default React.memo(MemoComp);