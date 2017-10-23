import React from 'react';
import Particles from 'react-particles-js';
import injectSheet from 'react-jss';
import bgImg from '../../assets/me.jpg';
import bgPatternImg from '../../assets/bgPattern.png';
import particlesParams from './particlesParams';
import Navbar from '../common/Navbar';

const HomePage = ({ classes }) => {
  const {
    containerStyles, boxStyles, h1Styles, h2Styles, bgInnerStyles,
  } = classes;

  return (
    <div className={containerStyles}>
      <Navbar />
      <div className={bgInnerStyles} />
      <Particles style={styles.particleStyles} params={particlesParams} />
      <div className={boxStyles}>
        <h1 className={h1Styles}>{'I\'m Adrian Carolli'}</h1>
        <h2 className={h2Styles}>Beautifully crafting web and mobile experiences</h2>
      </div>
    </div>
  );
};

const styles = {
  containerStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  bgInnerStyles: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 100,
  },
  particleStyles: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${bgPatternImg})`,
    backgroundSize: 'cover',
    zIndex: 150,
    opacity: '0.7',
    backgroundColor: '#1b1f29',
  },
  boxStyles: {
    maxWidth: 960,
    color: 'white',
    position: 'absolute',
    top: '50%',
    height: 200,
    margin: 'auto',
    marginTop: -120,
    left: 0,
    right: 0,
    border: '1px solid #fff',
    textAlign: 'center',
    zIndex: 200,
    backgroundColor: 'rgba(0,0,0,.2)',
    opacity: 1,
    padding: 33,
  },
  h1Styles: {
    fontSize: 67,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2Styles: {
    fontSize: 33,
    fontWeight: '200',
    margin: 0,
  },
};

export default injectSheet(styles)(HomePage);
