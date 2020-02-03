
// Authors: Sage Klein
// Purpose of the File: to hold functionality for sessionStorage for login, renders the <Navbar> and <ApplicationViews.js>

//<Dashboard.js> renders the <NavBar> and <ApplicationViews> 
import React, { Component } from 'react'
import ApplicationViews from "../src/ApplicationViews";
import NavBar from "../src/components/NavBar"
import "../src/css/Dashboard.css";
// import Dashboard from './components/dashboard/Dashboard'

//Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

class App extends Component {
	state = {
		user: sessionStorage.getItem("userId") !== null
	};

	// Check if credentials are in local storage
	//returns true/false
	// Check if userId are in session storage
	//returns true/false
	isAuthenticated = () => sessionStorage.getItem("userId") !== null;

	setUser = authObj => {
		localStorage.setItem("credentials", JSON.stringify(authObj));
		this.setState({
			user: this.isAuthenticated()
		});
	};
	clearUser = () => {
		localStorage.clear();

		this.setState({
			user: this.isAuthenticated()
		});
	};

	componentDidMount() {
		this.setState({
			user: this.isAuthenticated()
		});
	}

	render() {
		return (
			<>
				<NavBar user={this.state.user} clearUser={this.clearUser} />
				<ApplicationViews
					user={this.state.user}
					setUser={this.setUser}
				/>
			</>
		);
	}
}

export default App;