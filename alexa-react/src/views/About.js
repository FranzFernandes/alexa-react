import React from "react";
import Img from 'react-image';
import "./About.css";

export default class About extends React.Component {  

  render() {

    return (
      <div>
        <div className="App-header">
        </div>
        <h1>About me</h1>
        <p>Hierbij staat nog een kleine model ter verduidelijking van hoe de applicatie precies werkt. </p>
        <Img src = "../images/Network_diagram.png" />

      </div>
    );
  }
}
