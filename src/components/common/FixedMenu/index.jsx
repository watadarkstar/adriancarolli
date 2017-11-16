import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const FixedMenu = () => (
  <Menu fixed="top" size="large" style={{ zIndex: 200 }}>
    <Container>
      <Menu.Item as="a" active>Home</Menu.Item>
      <Menu.Item as="a">About</Menu.Item>
      <Menu.Item as="a">Skills</Menu.Item>
      <Menu.Item as="a">Portfolio</Menu.Item>
      <Menu.Item as="a">Contact</Menu.Item>
    </Container>
  </Menu>
);

export default FixedMenu;
