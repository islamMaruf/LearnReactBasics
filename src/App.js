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
import Portal from "./components/Portal";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import RenderPropCounter from "./components/RenderPropCounter";

class App extends Component {

    render() {
        return (
            <div className="App">
                <RenderPropCounter render={(count,incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}/> }/>
                <RenderPropCounter render={(count,incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}/> }/>
                {/*<User render={(isLoggedIn) => isLoggedIn ? 'maruf' : 'guest ' } />*/}
                {/*<ClickCounter name="maruf"/>*/}
                {/*<HoverCounter/>*/}
                {/*<ErrorBoundary>*/}
                {/*    <Hero name="joker"></Hero>*/}
                {/*</ErrorBoundary>*/}
                {/*<ErrorBoundary>*/}

                {/*    <Hero name="maruf"></Hero>*/}
                {/*</ErrorBoundary>*/}


                {/*<Portal/>*/}
                {/*<FRParent/>*/}
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
