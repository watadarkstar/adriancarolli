import React from 'react';
import { Button } from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import { StyledForm, StyledInput } from './styles';

const Contact = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>
        Contact Me
      </StyledH1>
      <StyledParagraph>
          Do you want to change the world like I do? Do you have an awesome opportunity or project
          for me? Feel free to get in touch.
      </StyledParagraph>
    </StyledHeader>
    <StyledForm action="//formspree.io/adrian.carolli1@gmail.com" method="POST">
      <StyledInput
        label="Name"
        control="input"
        name="name"
        type="text"
        placeholder="John Doe"
      />
      <StyledInput
        label="Email"
        control="input"
        name="_replyto"
        type="email"
        placeholder="yourname@company.com"
        required
      />
      <StyledInput
        label="Message"
        control="textarea"
        name="message"
        type="text"
        placeholder="Hello it's me, and I was wondering..."
        required
      />
      <Button secondary>Send</Button>
    </StyledForm>
  </SectionContainer>
);

export default Contact;
