import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import scrollToAnchor from '../../../utils/scrollToAnchor';

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

const FixedMenu = ({ activeItem }) => (
  <Menu fixed="top" size="large" style={{ zIndex: 200 }} inverted>
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
  </Menu>
);

export default FixedMenu;
