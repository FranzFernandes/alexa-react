import React from "react";
import {Link, Route, Switch} from "react-router-dom";

//import views
import Home from './Home.js';
import Dashboard from './views/Dashboard.js';
import Login from './views/Login.js';
import About from './views/About.js';

//Appbar imports
import Button from "material-ui/Button";
import Appbar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = {
	root: {
		width: "100%",
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};


export default class Header extends React.Component {
	render(){
		return(
			<div>
				<Appbar position="static">
					<Toolbar>
						<Typography type="title" color="inherit">
                          Title
                        </Typography>
                        <Link to="/"><Button color="contrast">Home</Button></Link>
                        <Link to="/dashboard"><Button color="contrast">Dashboard</Button></Link>
                        <Link to="/login"><Button color="contrast">Login</Button></Link>
                        <Link to="/about"><Button color="contrast">About</Button></Link>
					</Toolbar>
				</Appbar>
				<Switch>
                    <Route exact path = "/" component={Home} />
					<Route path = "/dashboard" component={Dashboard} />
                    <Route path = "/login" component={Login} />
                    <Route path = "/about" component={About} />
				</Switch>
			</div>
		);
	}
}
