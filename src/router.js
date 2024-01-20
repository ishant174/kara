import logo from './logo.svg';
import './App.css';
import Landing  from './components/Landing';
import Value from './components/Value';
import Vision from './components/Vision';
import CV from './components/CV';
import Available from './components/Available';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import App from './App';
import React, {Fragment} from 'react';
import DynamicComponentsData from './DynamicComponentsData';

function Rout() {
   
    let dynamicComponents = DynamicComponentsData;

  return (

    <Router>
    <Routes>
      {dynamicComponents.map((route) => (
        <Route
          key={route.index}
          path={route.url}
          exact 
       element={<App title={route.title} />}
        />
      ))}
    </Routes>
  </Router>

  
  );
}

export default Rout;
