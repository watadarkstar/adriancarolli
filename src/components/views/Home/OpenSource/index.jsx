import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IoSocialHackernews } from 'react-icons/lib/io';
import { FaFirefox } from 'react-icons/lib/fa';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import reactIcon from '../../../../assets/reactIcon.svg';
import { StyledH2, StyledReactImg, StyledButton, StyledIoSocialGithub } from './styles';

const OpenSource = () => (
  <SectionContainer inverted>
    <StyledHeader>
      <StyledH1>
        Open Source
      </StyledH1>
      <StyledParagraph>
        I contribute to open source projects such as React, Mattermost, Mozilla Firefox
        and others because I care about the future of the communities that I take part in.
      </StyledParagraph>
    </StyledHeader>
    <Grid columns={3} doubling>
      <Grid.Column>
        <StyledReactImg src={reactIcon} alt="react icon" />
        <StyledH2>React</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialHackernews size="70" />
        <StyledH2>Mattermost</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <FaFirefox size="70" />
        <StyledH2>Mozilla Firefox</StyledH2>
      </Grid.Column>
    </Grid>
    <StyledParagraph>
      <StyledButton size="large" href="https://github.com/watadarkstar" target="_blank" rel="noopener noreferrer">
        <StyledIoSocialGithub /> Visit my Github.com profile
      </StyledButton>
    </StyledParagraph>
  </SectionContainer>
);

export default OpenSource;
