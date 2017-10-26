import React from 'react';
import Particles from 'react-particles-js';

import {
  StyledContainer, StyledTitle, StyledSubtitle, StyledSegment, StyledBg,
} from './styles';
import particlesParams from './particlesParams';
import bgPatternImg from '../../../../assets/bgPattern.png';

const Splash = () => (
  <StyledSegment>
    <StyledBg />
    <Particles style={styles.particleStyles} params={particlesParams} />
    <StyledContainer>
      <StyledTitle>{'I\'m Adrian Carolli'}</StyledTitle>
      <StyledSubtitle />
    </StyledContainer>
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
