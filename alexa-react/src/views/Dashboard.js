import React from 'react';
import {CompactPicker} from 'react-color';
import {TabsContainer, Tabs, Tab, Button, Snackbar} from 'react-md';
import Logger from './Logger.js';

import './Dashboard.css';

export default class Dashboard extends React.Component {
state = {
  color: '#ffffff',
  toasts: [],
  autohide: true,
};

toastHello = () => {
  console.log("toast is called");
  this.addToast("Hello");
}

addToast = (text, action, autohide = true) => {
  this.setState((state) => {
    const toasts = state.toasts.slice();
    toasts.push({ text, action });
    return { toasts, autohide };
  });
};

dismissToast = () => {
  const [, ...toasts] = this.state.toasts;
  this.setState({ toasts });
};



handleChangeComplete = (color, event) => {
  console.log("color changed! " + color.hex);
  this.setState({ color: color.hex});
};

handleSendPost = (command, arg) => {
  this.addToast("Command has been sent!");
  console.log("turn on the lights! ");
  console.log(arg);
  var url = "https://api.particle.io/v1/devices/"; //add Device id
  fetch(url + command , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': //add Token
    },
    body: JSON.stringify({
      'args': arg,
    })
  }).then(function(res) {
    if (res.ok) {
      console.log("send the request sucessfully")
    } else if (res.status === 401) {
      this.addToast("Something went wrong!")
      console.log("oops you are not authorized");
    }
  }, function(e) {
    this.addToast("Something went wrong!")
    console.log("Error submitting the form");
  });
}
  render() {
    const { toasts, autohide } = this.state;

    return (
      <div className="Dashboard">
        <div className="DashboardTabs">
            <TabsContainer panelClassName="md-grid" colored>
              <Tabs tabId="simple-tab">
                <Tab label="ColorPicker">
                  <div className="Dashboard-body">
                    <div className="Dashboard-header">
                      <h1>Dashboard</h1>
                    </div>
                    <div className="Dashboard-body-controller">
                      <p>
                        Hier staat alle informatie over de gegeven commando's en maakt het mogelijk om zelf dingen in uit te voeren.<br></br>
                        Als eerste hebben we de color changer. Hierbij kunnen we de kleur uitkiezen die vervolgens naar de ledstrip gestuurd gaat worden.
                      </p>
                       <p>
                         <CompactPicker color={ this.state.color} onChangeComplete= {this.handleChangeComplete}/>
                        </p>
                       <br /><p>Vervolgens hebben we hier alle knoppen. De eerste twee zijn gewoon om de knoppen aan en uit te zetten</p>
                        <div className="Dashboard-buttons">
                          <Button raised onClick={() => this.handleSendPost("turnonoff", "on")}>Turn on the lights!</Button>
                          <div className="divider" />
                          <Button raised onClick={() => this.handleSendPost("turnonoff", "off")}>Turn off the lights!</Button>
                          <br /><br />
                          <p>En met deze knop kunnen we de ingevulde waarde van de colorpicker versturen naar de ledstrip!</p>
                          <Button raised onClick={() => this.handleSendPost("setcolor", this.state.color)}>Set Color</Button>
                          <p> Deze maakt een mooie regenboog!</p>
                          <Button raised onClick={() => this.handleSendPost("turnonoff", "rainbow")}>RAINBOW!</Button>

                        </div>
                    </div>
                  </div>
                </Tab>
                <Tab label="Log">
                  <div className="Logger">
                    <Logger />
                  </div>
                </Tab>
              </Tabs>
            </TabsContainer>
          <Snackbar
            id="postsend"
            toasts={toasts}
            autohide={autohide}
            onDismiss={this.dismissToast}
            />
        </div>
      </div>
    );
  }
}
