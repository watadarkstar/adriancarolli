import React from 'react';
import { Image } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { StyledHeroHeader, StyledHero, StyledDescription, StyledButton } from './styles';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../common';

const PortfolioPage = ({ data }) => (
  <div>
    <Helmet>
      <title>Adrian Carolli | {data.name}</title>
    </Helmet>
    <StyledHeroHeader>
      <StyledHero src={data.image1} />
    </StyledHeroHeader>
    <SectionContainer>
      <StyledHeader align="left">
        <StyledH1 align="left">
          {data.name}
        </StyledH1>
        <StyledParagraph align="left">
          {data.roles.map((role, index) => (
            <b key={role}>{ role } {index !== (data.roles.length - 1) && '| '}</b>
          ))}
        </StyledParagraph>
      </StyledHeader>
      <StyledDescription>
        {data.description}
      </StyledDescription>
      <StyledButton href={data.website} primary size="large">Visit Website</StyledButton>
      <Image src={data.image2} style={{ marginBottom: 100 }} />
    </SectionContainer>
  </div>
);

export default PortfolioPage;
