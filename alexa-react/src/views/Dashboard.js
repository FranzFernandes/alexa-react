import React from 'react';
import Grid from 'material-ui/Grid';

export default class Dashboard extends React.Component {
  state = {tests: []};

  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(tests => this.setState({ tests : [] }));
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h1>Dashboard</h1>
            <p>
              Hier staat alle informatie over de gegeven commando's en maakt het
              mogelijk om zelf dingen in te voeren
            </p>
          </Grid>
            {this.state.tests.map(test =>
              <div key={test.name}>{test.year}</div>
            )}
        </Grid>
      </div>
    );
  }
}

