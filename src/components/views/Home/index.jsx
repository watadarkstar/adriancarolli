import React, { Component } from 'react';
import { Visibility } from 'semantic-ui-react';
import Splash from './Splash';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
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
        { visible ? <FixedMenu activeItem="Home" /> : null }
        <Visibility
          id="Home"
          onBottomPassed={() => this.showFixedMenu()}
          onBottomVisible={() => this.hideFixedMenu()}
          once={false}
          style={{ height: '100%' }}
        >
          <Splash />
        </Visibility>
        <Visibility id="About">
          <About />
        </Visibility>
        <Visibility id="Skills">
          <Skills />
        </Visibility>
        <Visibility id="Contact">
          <Contact />
        </Visibility>
      </div>
    );
  }
}

export default Home;
