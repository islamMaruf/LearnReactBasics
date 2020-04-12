import React, {Component} from 'react';
import './App.css';
import styleMe from './app.module.css'
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
import StyleComponent from "./components/StyleComponent";
import FromComponent from "./components/FromComponent";
import LifeCycleA from "./components/LifeCycleA";
import LifeCycleB from "./components/LifeCycleB";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentOfPureAndRegularComp from "./components/ParentOfPureAndRegularComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <FRParent/>
                {/*<FocusInput/>*/}
                {/*<RefsDemo/>*/}
               {/*<ParentOfPureAndRegularComp/>*/}
                {/*<FragmentDemo/>*/}
                {/*<Table/>*/}
                {/*<LifeCycleB/>*/}
                {/*<LifeCycleA/>*/}
                {/*<FromComponent/>*/}
                {/*<StyleComponent primary={true}>*/}
                {/*    <h1 className={styleMe.success}>Hello world</h1>*/}
                {/*</StyleComponent>*/}
                {/*<ListRendering/>*/}
                {/*<UserGreetings/>*/}
                {/*<Greet name="maruf" age="24">*/}
                {/*    <p>this is paragraph</p>*/}
                {/*</Greet>*/}
                {/*<Greet name="sattar" age="54">*/}
                {/*    <Welcome name="done"><h1>this is h1</h1></Welcome>*/}
                {/*</Greet>*/}
                {/*<Welcome name="islam">*/}
                {/*    <p>this is p</p>*/}
                {/*</Welcome>*/}
                {/*<FunctionClick/>*/}
                {/*<CLassClick/>*/}
                {/*<EventBind/>*/}
                {/*<ParentComponent/>*/}
                {/*<Hello name="maruf islam"/>*/}
                {/*<Message/>*/}
                {/*<Counter/>*/}
            </div>
        )
    }
}

export default App;
