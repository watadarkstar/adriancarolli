import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import scrollToAnchor from '../../../utils/scrollToAnchor';
import { StyledDesktopMenu, StyledMobileMenu, StyledIoNavicon, StyledIoClose } from './styles';

const items = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Skills' },
  { name: 'Portfolio' },
  { name: 'Contact' },
];

const handleClick = ({ name }) => {
  const hash = `#${name}`;
  if (window.history) window.history.pushState(null, null, hash);
  scrollToAnchor(hash);
};

class FixedMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileVisible: false };
  }

  renderMenuItems() {
    const { activeItem } = this.props;

    return (
      <Container>
        {items.map(item => (
          <Menu.Item
            active={activeItem === item.name}
            onClick={() => handleClick(item)}
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
