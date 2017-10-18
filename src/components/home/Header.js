import React from 'react';
import bgImg from '../../assets/me.jpg';
import bgPatternImg from '../../assets/bgPattern.png';
import Particles from 'react-particles-js';
import injectSheet from 'react-jss';

const Header = ({ classes }) => {
  const { containerStyles, boxStyles, h1Styles, h2Styles, bgInnerStyles } = classes;
  
  return (
    <div className={containerStyles}>
      <div className={bgInnerStyles} />
      <Particles style={styles.particleStyles} params={particlesParams} />
      <div className={boxStyles}>
          <h1 className={h1Styles}>I'm Adrian Carolli</h1>
          <h2 className={h2Styles}>Beautifully crafting web and mobile experiences</h2>
      </div>
    </div>
  )
}

const particlesParams = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

const styles = {
  containerStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  },
  bgInnerStyles: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 100

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
    width: 960,
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
    padding: 33
  },
  h1Styles: {
    fontSize: 67,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    marginBottom: 10
  },
  h2Styles: {
    fontSize: 33,
    fontWeight: '200',
    margin: 0
  }
};

export default injectSheet(styles)(Header);
