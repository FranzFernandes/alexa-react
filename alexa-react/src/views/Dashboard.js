import React from 'react';
import PropTypes from 'prop-types';
import {CompactPicker} from 'react-color';
// import { DashboardTabs } from './DashboardTabs';
import {TabsContainer, Tabs, Tab} from 'react-md';

import "./Dashboard.css"

export default class Dashboard extends React.Component {
  state = {tests: []};

  componentDidMount() {
    fetch('/test', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function(response) {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
      })
      .then(tests => this.setState({tests}));
    // this is a test fetch. Testing if this works
    /*    fetch('/cities')
      .then(function(response) {
        if(response.ok) {
          console.log("cities got")
          return response.json();
        }
      })
      //.then(tests => this.setState({ tests }));*/
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardTabs">
          {/* <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="simple-tab">
              <Tab label="Tab one">
                <h3>Hello</h3>
              </Tab>
              <Tab labelE="Tab two">
                <h3>HalloDaar</h3>
              </Tab>
            </Tabs>
          </TabsContainer> */}
        </div>
        <div className="Dashboard-body">
          <div className="Dashboard-header">
            <h1>Dashboard</h1>
          </div>
          <p>
            Hier staat alle informatie over de gegeven commando's en maakt het mogelijk om zelf dingen in te voeren asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          </p>
          <div className="Data">
            {this.state.tests.map(test => (
              <div key={test._id}>
                <p>{test.username}</p>

                <p>{test.password}</p>
              </div>
            ))}
          </div>
        </div>

        <CompactPicker />
      </div>
    );
  }
}
