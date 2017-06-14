import React from "react";
import {render} from "react-dom";
import {Root} from "./components/Root";
import { Router , Route , browserHistory,IndexRoute} from "react-router";

import User from "./components/User";
import Home from "./components/Home";




class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id"} component={User}/>
                    <Route path={"home"} component={Home}/>
                </Route>
            </Router>
    );
    }
}

render(<App />, window.document.getElementById('app'));