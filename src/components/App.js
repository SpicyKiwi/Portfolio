import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'


export default function App() {
    return <>
    
    <Router>



            <Route path='/home'>
                <Home />
            </Route>





    </Router>

    </>
}
