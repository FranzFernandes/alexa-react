import React from 'react';
import PropTypes from 'prop-types';
import {CompactPicker} from 'react-color';
import {TabsContainer, Tabs, Tab} from 'react-md';
import Logger from './Logger.js';

import './Dashboard.css';

export default class Dashboard extends React.Component {
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
                    <p>
                      Hier staat alle informatie over de gegeven commando's en
                      maakt het mogelijk om zelf dingen in te voeren
                      asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                    </p>
                    <CompactPicker />
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
