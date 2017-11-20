import React from 'react';
import { Button } from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import { StyledForm, StyledInput } from './styles';
import resume from '../../../../assets/resume.pdf';

const Contact = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>
        Contact Me
      </StyledH1>
      <StyledParagraph>
          Do you want to change the world like I do? Do you have an awesome oppurtunity or project
          for me? Feel free to get in touch.  Also, check out my <a href={resume}>resume</a>.
      </StyledParagraph>
    </StyledHeader>
    <StyledForm action="//formspree.io/adrian.carolli1@gmail.com" method="POST">
      <StyledInput
        label="Your Name"
        control="input"
        name="name"
        type="text"
        placeholder="E.g. John Doe"
      />
      <StyledInput
        label="Your Email"
        control="input"
        name="_replyto"
        type="text"
        placeholder="E.g. yourname@company.com"
      />
      <StyledInput
        label="Your Message"
        control="textarea"
        name="message"
        type="text"
        placeholder="E.g. Hello it's me, and I was wondering..."
      />
      <Button secondary>Send</Button>
    </StyledForm>
  </SectionContainer>
);

export default Contact;
