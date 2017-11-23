import React from 'react';
import Particles from 'react-particles-js';
import { scroller } from 'react-scroll';

import {
  StyledContainer, StyledTitle, StyledSubtitle, StyledSegment, StyledBg, StyledChevronDown,
} from './styles';
import particlesParams from './particlesParams';
import bgPatternImg from '../../../../assets/bgPattern.png';

const handleClick = () => {
  scroller.scrollTo('About', {
    duration: 500,
    delay: 100,
    smooth: true,
    offset: 5,
  });
};

const Splash = () => (
  <StyledSegment>
    <StyledBg />
    <Particles style={styles.particleStyles} params={particlesParams} />
    <StyledContainer>
      <StyledTitle>{'I\'m Adrian Carolli'}</StyledTitle>
      <StyledSubtitle />
    </StyledContainer>
    <StyledChevronDown size="30" color="white" onClick={() => handleClick()} />
  </StyledSegment>
);

const styles = {
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
};

export default Splash;
