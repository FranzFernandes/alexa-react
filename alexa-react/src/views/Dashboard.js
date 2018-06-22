import React from 'react';
import PropTypes from 'prop-types';
import {CompactPicker, SliderPicker} from 'react-color';
import {TabsContainer, Tabs, Tab, Button, SVGIcon} from 'react-md';
import Logger from './Logger.js';


import './Dashboard.css';

export default class Dashboard extends React.Component {
state = {
  color: '#ffffff',
};

handleChangeComplete = (color, event) => {
  console.log("color changed! " + color.hex);
  this.setState({ color: color.hex});
};

handleSendPost = (command, arg) => {
  console.log("turn on the lights! ");
  console.log(arg);
  var url = "https://api.particle.io/v1/devices/54ff6d066678574954240167/";
  fetch(url + command , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7427afdb560cb5095c33c24ae3038b455a58f0b6'
    },
    body: JSON.stringify({
      'args': arg,
    })
  }).then(function(res) {
    if (res.ok) {
      console.log("send the request sucessfully")
    } else if (res.status == 401) {
      console.log("oops you are not authorized");
    }
  }, function(e) {
    console.log("Error submitting the form");
  });
}
  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardTabs">
          {
            <TabsContainer panelClassName="md-grid" colored>
              <Tabs tabId="simple-tab">
                <Tab label="ColorPicker">
                  <div className="Dashboard-body">
                    <div className="Dashboard-header">
                      <h1>Dashboard</h1>
                    </div>
                    <div className="Dashboard-body-mid">
                      <p>
                        Hier staat alle informatie over de gegeven commando's en
                        maakt het mogelijk om zelf dingen in te voeren
                      </p>
                      <CompactPicker color={ this.state.color} onChangeComplete= {this.handleChangeComplete}/>
                      <Button raised onClick={() => this.handleSendPost("turnonoff", "on")}>Turn on the lights!</Button>
                      <Button raised onClick={() => this.handleSendPost("turnonoff", "off")}>Turn off the lights!</Button>
                      <Button raised onClick={() => this.handleSendPost("setcolor", this.state.color)}>Set Color</Button>
                    </div>
                  </div>
                </Tab>
                <Tab label="Log">
                  <Logger />
                </Tab>
              </Tabs>
            </TabsContainer>
          }
        </div>
      </div>
    );
  }
}
