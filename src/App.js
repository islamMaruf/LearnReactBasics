import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import CLassClick from './components/CLassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreetings from './components/UserGreetings';
import ListRendering from './components/ListRendering';

class App extends Component{
  render(){
    return (
    <div className="App">
      <ListRendering/>
      <UserGreetings/>
    {/* <Greet name="maruf" age="24">
      <p>this is paragraph</p>
    </Greet>
    <Greet name="sattar" age="54">
      <Welcome name="done"> <h1>this is h1</h1></Welcome>
    </Greet> 
    <Welcome name="islam">
      <p>this is p</p>
    </Welcome>
    <FunctionClick></FunctionClick>
    <CLassClick></CLassClick>
    <EventBind/>
    <ParentComponent/>
     <Hello name="maruf islam"/>
    <Message/>
    <Counter></Counter>  */}
    </div>
  )
  } 
}

export default App;
