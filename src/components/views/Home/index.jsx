import React, { Component } from 'react';
import { Visibility } from 'semantic-ui-react';
import Splash from './Splash';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Portfolio from './Portfolio';
import FixedMenu from '../../common/FixedMenu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, activeItem: "Home" };
  }

  showFixedMenu() { this.setState({ visible: true }); }
  hideFixedMenu() { this.setState({ visible: false }); }

  render() {
    const { visible, activeItem } = this.state;

    return (
      <div style={{ height: '100%' }}>
        { visible ? <FixedMenu activeItem={activeItem} /> : null }
        <Visibility
          id="Home"
          onBottomPassed={() => this.showFixedMenu()}
          onBottomVisible={() => this.hideFixedMenu()}
          onTopPassed={() => this.setState({ activeItem: 'Home' })}
          once={false}
          style={{ height: '100%' }}
        >
          <Splash />
        </Visibility>
        <Visibility
          id="About"
          onTopPassedReverse={() => this.setState({ activeItem: 'Home' })}
          onTopPassed={() => this.setState({ activeItem: 'About' })}
          once={false}
        >
          <About />
        </Visibility>
        <Visibility
          id="Skills"
          onTopPassedReverse={() => this.setState({ activeItem: 'About' })}
          onTopPassed={() => this.setState({ activeItem: 'Skills' })}
          once={false}
        >
          <Skills />
        </Visibility>
        <Visibility
          id="Portfolio"
          onTopPassedReverse={() => this.setState({ activeItem: 'Skills' })}
          onTopPassed={() => this.setState({ activeItem: 'Portfolio' })}
          once={false}
        >
          <Portfolio />
        </Visibility>
        <Visibility
          id="Contact"
          onTopPassedReverse={() => this.setState({ activeItem: 'Portfolio' })}
          onTopPassed={() => this.setState({ activeItem: 'Contact' })}
          once={false}
        >
          <Contact />
        </Visibility>
      </div>
    );
  }
}

export default Home;
