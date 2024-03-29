import "../CSS/App.css";
import "../CSS/responsive.css";
import Landing from "../components/Landing/Landing";
import Value from "../components/Value/Value";
import Vision from "../components/Vision/Vision";
import CV from "../components/CV/CV";
import Available from "../components/Available/Available";
import Navbar from "../components/Navbar/Navbar";

import React, { Component } from "react";
import Error from "../components/404/Error";

function App(props) {
  const { title, content } = props;
  console.log(props.dynamicData);
  console.log(props.title);
  return (
    <div className="App">
    
      <Navbar />

      <Landing dynamicContent={props.dynamicData} name={props.title} picname = {props.name}/>
      <Value dynamicContent={props.dynamicData} />
      <Vision dynamicContent={props.dynamicData} />
      <CV dynamicContent={props.dynamicData} />
      <Available dynamicContent={props.dynamicData} />
    </div>
  );
}

export default App;
