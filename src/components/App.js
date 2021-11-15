import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'


export default function App() {
    return <>
    
    <Router>

        <Routes>

            <Route path='/home'>
                <Home />
            </Route>

        </Routes>



    </Router>

    </>
}
