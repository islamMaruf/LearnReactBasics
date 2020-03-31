import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

class App extends Component{
  render(){
    return (
    <div className="App">
    <Greet name="maruf" age="24">
      <p>this is paragraph</p>
    </Greet>
    <Greet name="sattar" age="54">
      <Welcome name="done"> <h1>this is h1</h1></Welcome>

    </Greet>
    <Welcome name="islam">
      <p>this is p</p>
    </Welcome>
    <Hello name="maruf islam"/>
    <Message/>
    <Counter></Counter>
    
  </div>
  )
  } 
}

export default App;
