import React from 'react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import { StyledBrandImage, StyledBrands } from './styles';
import kikImg from '../../../../assets/about/kik.svg';
import cineplexImg from '../../../../assets/about/cineplex.png';
import mecImg from '../../../../assets/about/mec.gif';
import waveImg from '../../../../assets/about/wave.jpeg';
import pentaImg from '../../../../assets/about/penta.png';
import liberateImg from '../../../../assets/about/liberate.jpg';
import keyholeImg from '../../../../assets/about/keyhole.png';
import xtremeImg from '../../../../assets/about/xtreme.png';
import sparkgigImg from '../../../../assets/about/sparkgig.png';
import pivotalImg from '../../../../assets/about/pivotal.png';

const About = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>
        About Me
      </StyledH1>
      <StyledParagraph>
        I am an experienced Software Engineer with a focus on Front-End Engineering.
        For more than 7 years I have worked with brands and startups in
        the Toronto and Kitchener-Waterloo Region.
      </StyledParagraph>
    </StyledHeader>
    <StyledBrands>
      <StyledBrandImage height="70" src={cineplexImg} />
      <StyledBrandImage height="70" src={mecImg} />
      <StyledBrandImage height="70" src={waveImg} />
      <StyledBrandImage height="70" src={pentaImg} />
      <StyledBrandImage height="70" src={xtremeImg} />
      <StyledBrandImage height="70" src={pivotalImg} />
      <StyledBrandImage height="70" src={liberateImg} />
      <StyledBrandImage height="70" src={kikImg} />
      <StyledBrandImage height="70" src={sparkgigImg} />
      <StyledBrandImage height="70" src={keyholeImg} />
    </StyledBrands>
  </SectionContainer>
);

export default About;
