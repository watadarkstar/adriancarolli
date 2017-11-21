/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/lib/io';
import bgImg from '../../../../assets/me.jpg';

export const StyledSegment = styled.div`
  padding: 0 !important;
  min-height: 700px;
  border: 0 !important;
`;

export const StyledContainer = styled.div`
  @media (max-width: 968px) {
    max-width: 660px;
    padding: 40px;
  }
  @media (max-width: 678px) {
    max-width: 320px;
    padding: 66px 0;
  }
  max-width: 960px;
  color: white;
  position: absolute;
  top: 50%;
  height: 200px;
  margin: auto;
  margin-top: -120px;
  left: 0;
  right: 0;
  border: 1px solid #fff;
  text-align: center;
  z-index: 200;
  background-color: rgba(0,0,0,.2);
  opacity: 1;
  padding: 22px;
`;

export const StyledTitle = styled.h1`
  @media (max-width: 968px) {
    font-size: 3em;
  }
  @media (max-width: 678px) {
    font-size: 1.42em;
    margin-bottom: 5px;
  }
  font-size: 4.78em;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: normal;
  margin: 0;
  margin-bottom: 7px;
`;

export const StyledSubtitle = styled.h2`
  @media (max-width: 968px) {
    font-size: 1.5em;
  }
  @media (max-width: 678px) {
    font-size: 1em;
  }
  &::before {
    content: 'Beautifully crafting web and mobile experiences';
    @media (max-width: 678px) {
      content: 'Crafting web & mobile experiences';
    }
  }
  font-size: 2.34em;
  font-weight: 200;
  margin: 0;
`;

export const StyledBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  z-index: 100;
`;

export const StyledChevronDown = styled(IoChevronDown)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -15px;
  z-index: 200;
`;
