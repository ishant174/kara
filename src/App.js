import logo from './logo.svg';
import './App.css';
import Landing  from './components/Landing';
import Value from './components/Value';
import Vision from './components/Vision';
import CV from './components/CV';
import Available from './components/Available';
import Navbar from './components/Navbar';
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
