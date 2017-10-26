import React, { Component } from 'react';
import { Visibility } from 'semantic-ui-react';
import Splash from './Splash';
import About from './About';
import FixedMenu from '../../common/FixedMenu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showFixedMenu() { this.setState({ visible: true }); }
  hideFixedMenu() { this.setState({ visible: false }); }

  render() {
    const { visible } = this.state;

    return (
      <div style={{ height: '100%' }}>
        { visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={() => this.showFixedMenu()}
          onBottomVisible={() => this.hideFixedMenu()}
          once={false}
          style={{ height: '100%' }}
        >
          <Splash />
        </Visibility>
        <Visibility>
          <About />
        </Visibility>
      </div>
    );
  }
}

export default Home;
