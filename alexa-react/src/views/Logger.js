import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import './Logger.css';

class Logger extends React.Component {
  state = {logs: []};

  fetchData = () => {
    fetch('/test', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response.json();
        }
      })
     .then(logs => this.setState({logs}))
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    return (
      <div className="Dataholder">
      <p>Dit is de Logger, hierin staat alle informatie die verstuurd wordt van de Particle naar de server toe.
        Dit is nog een beetje work-in-progress/
      </p>
        <Card className="md-block-centered" >
          <CardTitle title="Logger"/>
          <CardText>

            {this.state.logs.map(log => (
              <div key={log._id}>
                {log.published_at}
                {log.device}
                {log.function}
                {log.value}
              </div>
            ))}
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Logger;
