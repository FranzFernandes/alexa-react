import React from 'react';

export default class Dashboard extends React.Component {
    state= {users: []}

    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

	render(){
        return (
          <div>
            <h1>Placeholder for Dashboard</h1>
              {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
              )}
          </div>
        );
	}
}
