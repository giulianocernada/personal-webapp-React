import React, { Component } from 'react';
import Layout from './HOC/Layout/Layout';
import MainContent from './Containers/MainContent/MainContent';

class App extends Component {
	render(){
		return (
		    <div>
		    	<Layout>
		    		<MainContent />
		    	</Layout>
		    </div>
		);
	}
}

export default App;
