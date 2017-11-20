/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 100px 0;
`;

export const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 2em;
  padding-bottom: 20px;
  text-align: ${props => props.align || 'center'};
  margin: ${props => (props.align === 'left' ? '0' : 'auto')};
`;

export const StyledParagraph = styled.p`
  max-width: 750px;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 2em;
  text-align: ${props => props.align || 'center'};
  margin: ${props => (props.align === 'left' ? '0' : 'auto')};
`;
