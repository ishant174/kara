 import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Vision from './components/Vision';
import CV from './components/CV';
import Available from './components/Available';
import Navbar from './components/Navbar';
import "./App.css";
 
class Router extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Vision />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
 
export default Router;