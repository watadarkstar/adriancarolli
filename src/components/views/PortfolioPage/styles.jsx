/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const StyledHeroHeader = styled.header`
  background: #2f3238;
`;

export const StyledHero = styled.div`
  display: block;
  position: relative;
  opacity: 0.6;
  min-height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 968px) {
    min-height: 300px;
  }
`;

export const StyledDescription = styled.div`
  font-weight: 300;
  font-size: 1.3em;
  line-height: 2em;
  text-align: left;
  padding-bottom: 100px;
  white-space: pre-line;
`;

export const StyledButton = styled(Button)`
  &&&& {
    display: table;
    margin-bottom: 100px;
    border: 2px solid #2f3238;
    background: white;
    color: #2f3238;
    text-align: left;
  }
`;
