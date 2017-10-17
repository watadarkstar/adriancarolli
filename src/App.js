import React, { Component } from 'react';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div style={styles.containerStyles}>
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
