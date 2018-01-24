import React from 'react';
import Grid from 'material-ui/Grid';

export default class Dashboard extends React.Component {
  state = {cities: []};

  componentDidMount() {
    fetch('/cities')
      .then(res => res.json())
      .then(cities => this.setState({cities}));
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
          <Grid item xs={12}>
            {this.state.cities.map(cities => (
              <div key={cities.name}>
                <Grid item xs={6}>
                  {cities.name}
                </Grid>
                <Grid item xs={6}>
                  {cities.population}
                </Grid>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}
