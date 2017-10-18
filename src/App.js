import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div style={styles.containerStyles}>
		<Helmet>
			<title>Adrian Carolli</title>
		</Helmet>
    	<Home />
      </div>
    );
  }
}

const styles = {
  containerStyles: {
  }
}

export default App;
