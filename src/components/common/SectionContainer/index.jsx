import React from 'react';
import { StyledContainer, StyledOuterContainer } from './styles';

const SectionContainer = ({ children }) => (
  <StyledOuterContainer>
    <StyledContainer>
      {children}
    </StyledContainer>
  </StyledOuterContainer>
);

export default SectionContainer;
