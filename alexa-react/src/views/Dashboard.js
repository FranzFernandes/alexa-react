import React from 'react';
import Grid from 'material-ui/Grid';

export default class Dashboard extends React.Component {
  state = {tests: []};

  componentDidMount() {
    //fetch('/test')
    // .then(res => res.json())
    // .then(tests => this.setState({tests: []}))
    //
    fetch('/test')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json => this.setState({test : json.name});
      })
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          Hier staat alle informatie over de gegeven commando's en maakt het
          mogelijk om zelf dingen in te voeren
        </p>
        {this.state.tests}
        {this.state.tests.map(test => (
          <div key={test._id}>
            {test.name} {test.year}
          </div>
        ))}
      </div>
    );
  }
}
