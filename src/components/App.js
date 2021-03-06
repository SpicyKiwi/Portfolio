import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'


export default function App() {
    return <>
    
    <Router>

        <Switch>

            <Route path='/home'>
                <Home />
            </Route>

            <Router exact path='/'>
                <Redirect to='/home' />
            </Router>

        </Switch>

    </Router>

    </>
}
