import React from 'react';
import { SectionContainer, StyledH1, StyledH2, StyledHeader } from '../../../common';
import { StyledBrandImage, StyledBrands } from './styles';

const About = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>
        About Me
      </StyledH1>
      <StyledH2>
        I am an experienced and well known Software Engineer with a focus
        on Front-End Enginnering. For more than 5 years I have worked with
        leading brands and startups in the Toronto and Waterloo region.
      </StyledH2>
    </StyledHeader>
    <StyledBrands>
      <StyledBrandImage height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cineplex_logo.svg/1200px-Cineplex_logo.svg.png" />
      <StyledBrandImage height="70" src="http://ires.ubc.ca/files/2014/11/Mountain-Equipment-Co-Op.gif" />
      <StyledBrandImage height="70" src="https://www.chequesnow.ca/wp-content/uploads/2013/06/WaveAccounting_logo1.jpeg" />
      <StyledBrandImage height="70" src="http://pentamedical.ca/images/logo.png" />
      <StyledBrandImage height="70" src="https://berrystorm.files.wordpress.com/2009/08/logo.png?w=450" />
      <StyledBrandImage height="70" src="https://biz.prlog.org/LiberateHealth/logo.jpg" />
      <StyledBrandImage height="70" src="https://cdn.worldvectorlogo.com/logos/kik.svg" />
      <StyledBrandImage height="70" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/293555-b0c86e558d04eab0590d4e6254dcc2ef-medium_jpg.jpg?buster=1384280480" />
    </StyledBrands>
  </SectionContainer>
);

export default About;
