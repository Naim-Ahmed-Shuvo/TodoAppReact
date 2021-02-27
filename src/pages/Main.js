import React from 'react';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Main = () => {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>

            </div>
        </Router>
    );

}

var showGreetings = () =>{
    console.log("Do something");
    var text = "abcdefghijklmnopqrst";
};

export default Main;