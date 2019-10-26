import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
	state = {
		showSidebar: false
	}

	toggleContactSidebarHandler = () => {
		const elementShows = this.state.showSidebar;
		this.setState({showSidebar: !elementShows});
	}

	render(){
		let sidebar = null;

		if (this.state.showSidebar) {
			sidebar = <Sidebar clicked={this.toggleContactSidebarHandler}/>;
		}

		return (
		    <div>
		      <Navbar clicked={this.toggleContactSidebarHandler}/>
		      {sidebar}
		      <Footer />
		    </div>
		);
	}
}

export default App;
