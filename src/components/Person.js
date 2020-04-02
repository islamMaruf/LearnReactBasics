import React from 'react'

function Person(props) {
    const {name,age} = props.person
    return (
        <>
            <li>I am {name} and {age} years old.</li>
        </>
    )
}
export default Person
