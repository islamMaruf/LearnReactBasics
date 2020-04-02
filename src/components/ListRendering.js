import React, { Component } from 'react'
import Person from './Person';

class ListRendering extends Component {

    render() {
        const persons = [
            {
                name: 'maruf',
                age: 24
            },
            {
                name: 'faruk',
                age: 25
            }
        ]
        const personList = persons.map((person,key) => <Person key={key} person={person} />);
        return <ul> {personList} </ul>


    }
}

export default ListRendering
