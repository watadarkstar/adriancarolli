import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IoSocialJavascript, IoSocialHtml5, IoSocialCss3, IoSocialNodejs,
  IoSocialHackernews, IoSocialApple, IoSocialAndroid } from 'react-icons/lib/io';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import reactIcon from '../../../../assets/reactIcon.svg';
import { StyledH2, StyledReactImg } from './styles';

const Skills = () => (
  <SectionContainer inverted>
    <StyledHeader>
      <StyledH1>
        Skills
      </StyledH1>
      <StyledParagraph>
        With 7+ years as a Software Engineer I keep updated with the latest technologies
        so I can build faster, more reliable and forward-thinking applications for
        companies like yours.
      </StyledParagraph>
    </StyledHeader>
    <Grid columns={4} doubling>
      <Grid.Column>
        <StyledReactImg src={reactIcon} alt="react icon" />
        <StyledH2>React</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialAndroid size="70" />
        <StyledH2>React Native</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialJavascript size="70" />
        <StyledH2>JavaScript (ES6)</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialHtml5 size="70" />
        <StyledH2>HTML5</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialCss3 size="70" />
        <StyledH2>CSS3</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialNodejs size="70" />
        <StyledH2>Node.js</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialHackernews size="70" />
        <StyledH2>Startups</StyledH2>
      </Grid.Column>
      <Grid.Column>
        <IoSocialApple size="70" />
        <StyledH2>Mobile</StyledH2>
      </Grid.Column>
    </Grid>
  </SectionContainer>
);

export default Skills;
