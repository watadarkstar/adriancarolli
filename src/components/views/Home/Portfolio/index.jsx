import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import { StyledImage, StyledColumn, StyledCaption, StyledH2, StyledP, StyledPContainer } from './styles';
import data from './data';

const Portfolio = () => (
  <div>
    <SectionContainer>
      <StyledHeader>
        <StyledH1>
          Portfolio
        </StyledH1>
        <StyledParagraph>
          I have helped transform the future of accounting, chat, health care, enterntainment and
          many more industries. Because the people who are crazy enough to think they can change the
          world – are the ones who do.
        </StyledParagraph>
      </StyledHeader>
    </SectionContainer>
    <Grid columns={2} stackable>
      {_.map(data, item => (
        <StyledColumn>
          <StyledImage src={item.image1} alt={item.name} />
          <StyledCaption>
            <StyledH2>{item.name}</StyledH2>
            {item.caption.map(text => (
              <StyledPContainer><StyledP>{text}</StyledP></StyledPContainer>
            ))}
          </StyledCaption>
        </StyledColumn>
      ))}
    </Grid>
  </div>
);

export default Portfolio;
