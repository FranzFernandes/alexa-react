import React from "react";
import "./Home.css";

class Home extends React.Component {
	render() {
		return (
      <div className="App">
          <p className="intro"> Projecten waar ik op dit moment aan werk/aan moet werken:</p>
          <ul>
            <li>Deze website</li>
            <li>Android app (Link hiernaartoe)</li>
            <li>Misschien nog meer?</li>
          </ul>
      </div>
		);
	}
}
export default Home;
