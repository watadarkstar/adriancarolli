import React from 'react';
import Particles from 'react-particles-js';
import bgImg from '../../assets/me.jpg';
import bgPatternImg from '../../assets/bgPattern.png';
import Nav from '../shared/Nav';

const Header = () => {
  const {
    containerStyles, innerContainerStyles, boxStyles, h1Styles,
  } = styles;

  return (
    <div style={containerStyles}>
      <Nav />
      <div>
        <Particles style={innerContainerStyles} />
        <div style={boxStyles}>
          <h1 style={h1Styles}>{'I\'m Adrian Carolli'}</h1>
          <h2>Beautifully crafting web and mobile experiences</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  containerStyles: {
    backgroundColor: 'red',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  innerContainerStyles: {
    backgroundColor: '#1b1f29',
    opacity: '0.7',
    backgroundImage: `url(${bgPatternImg})`,
    backgroundSize: 'cover',
  },
  boxStyles: {
    width: '1170px',
    color: 'white',
    position: 'absolute',
    top: '50%',
    height: '200px',
    margin: 'auto',
    marginTop: '-120px',
    left: 0,
    right: 0,
    border: '1px solid #fff',
    textAlign: 'center',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,.2)',
    opacity: 1,
  },
  h1Styles: {
    fontSize: 100,
    color: 'white',
  },
};

export default Header;
