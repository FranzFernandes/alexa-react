import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


export default class Dashboard extends React.Component {
  state = {tests: []};

  componentDidMount() {
    fetch('/test', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
      .then(function(response) {
        if(response.ok) {
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
      <div>
          <Typography type="title">
              <h1>Dashboard</h1>
          </Typography>
          <Typography type="body1">

          <p>
          Hier staat alle informatie over de gegeven commando's en maakt het
          mogelijk om zelf dingen in te voeren
        </p>
        {this.state.tests.map(test => (
          <div key={test._id}>
            {test.name}{test.year}
          </div>
        ))}
          </Typography>
      </div>
    );
  }
}
