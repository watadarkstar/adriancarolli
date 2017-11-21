/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

export const StyledColumn = styled(Grid.Column)`
  background: #2f3238;
  overflow: hidden;
  span {
    opacity: 0.3;
  }
  
  &&&&&&& {
    padding: 0 !important;
  }
  
  &:hover {
    span {
      opacity: 0.6;
      -webkit-transform: scale3d(1.1,1.1,1);
      transform: scale3d(1.1,1.1,1);
    }
    
    p {
      -webkit-transition-delay: 0.15s;
      transition-delay: 0.15s;
    }
  }
`;

export const StyledImage = styled.span`
  display: block;
  position: relative;
  -webkit-transition: opacity 1s, -webkit-transform 1s;
  transition: opacity 1s, transform 1s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  min-height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const StyledCaption = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 130px 100px;
  text-align: left;
  
  @media (max-width: 968px) {
    padding: 130px 25px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 40px;
  font-weight: 500;
  text-shadow: 1px 3px 2px rgba(0,0,0,0.3);
  letter-spacing: 0px;
  text-transform: uppercase;
  color: white;
  line-height: normal;
  padding-bottom: 20px;
  
  @media (max-width: 968px) {
    font-size: 32px;
  }
`;

export const StyledPContainer = styled.div`
  margin: 4px;
`;

export const StyledP = styled.p`
  display: inline-block;
  padding: 0.4em 1em;
  background: rgba(255,255,255,0.9);
  color: #2f3238;
  text-transform: none;
  font-weight: 500;
  font-size: 18px;
  
  @media (max-width: 968px) {
    font-size: 16px;
  }
`;
