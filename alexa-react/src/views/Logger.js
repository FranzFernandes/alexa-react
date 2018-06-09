import React from 'react';

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
          console.log(response);
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
        {this.state.logs.map(log => (
          <div key={log._id}>
            {log.username}
            {log.password}
          </div>
        ))}
      </div>
    );
  }
}

export default Logger;
