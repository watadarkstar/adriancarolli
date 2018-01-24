import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { scroller } from 'react-scroll';
import { StyledDesktopMenu, StyledMobileMenu, StyledIoNavicon, StyledIoClose } from './styles';

const items = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Skills' },
  { name: 'Portfolio' },
  { name: 'Github' },
  { name: 'Contact' },
];

class FixedMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileVisible: false };
  }

  handleClick({ name }) {
    const hash = `#${name.replace(/ /g, '')}`;
    this.setState({ mobileVisible: false });
    if (window.history) window.history.pushState(null, null, hash);
    scroller.scrollTo(name, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 5,
    });
  }

  renderMenuItems() {
    const { activeItem } = this.props;

    return (
      <Container>
        {items.map(item => (
          <Menu.Item
            active={activeItem === item.name}
            onClick={() => this.handleClick(item)}
            key={item.name}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Container>
    );
  }

  renderMobileNavIcon() {
    const { mobileVisible } = this.state;

    return (
      <Container>
        { mobileVisible === false
          ? <StyledIoNavicon
            size="30"
            color="white"
            onClick={() => this.setState({ mobileVisible: !mobileVisible })}
          />
          : <StyledIoClose
            size="20"
            color="white"
            onClick={() => this.setState({ mobileVisible: !mobileVisible })}
          />
        }
      </Container>
    );
  }

  render() {
    const { mobileVisible } = this.state;

    return (
      <div>
        <StyledDesktopMenu fixed="top" size="large" inverted>
          { this.renderMenuItems() }
        </StyledDesktopMenu>
        <StyledMobileMenu fixed="top" size="large" inverted stackable>
          { this.renderMobileNavIcon() }
          { mobileVisible === true &&
            this.renderMenuItems()
          }
        </StyledMobileMenu>
      </div>
    );
  }
}

export default FixedMenu;
