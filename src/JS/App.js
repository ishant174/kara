
import '../CSS/App.css';
import '../CSS/responsive.css'
import Landing  from '../components/Landing/Landing';
import Value from '../components/Value/Value';
import Vision from '../components/Vision/Vision';
import CV from '../components/CV/CV';
import Available from '../components/Available/Available';
import Navbar from '../components/Navbar/Navbar';

import React, { Component } from 'react';




function App(props) {
  const { title, content } = props
  console.log(props.title)
  return (
    <div className="App">
      <Navbar/>
      
      <Landing name={props.title}/>
      <Value/>
      <Vision/>
     <CV/>
     <Available/> 
    </div>
  );
}

export default App;
