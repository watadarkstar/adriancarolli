import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from '../../../common';
import { StyledForm, StyledInput } from './styles';

const Contact = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>
        Contact Me
      </StyledH1>
      <StyledParagraph>
          Have an awesome oppurtunity or project for me? Or simply wish to say
          hello, feel free to get in touch.
      </StyledParagraph>
    </StyledHeader>
    <StyledForm action="//formspree.io/adrian.carolli1@gmail.com" method="POST">
      <Form.Group widths="grouped">
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
          placeholder="E.g. Hello it's me I was wondering..."
        />
        <Button secondary>Send</Button>
      </Form.Group>
    </StyledForm>
  </SectionContainer>
);

export default Contact;
