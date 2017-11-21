/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { IoNavicon, IoClose } from 'react-icons/lib/io';

export const StyledDesktopMenu = styled(Menu)`
  z-index: 200;
  @media (max-width: 767px) {
    &&& {
      display: none;
    }
  }
`;
export const StyledMobileMenu = styled(Menu)`
  z-index: 200;
  @media (min-width: 767px) {
    &&& {
      display: none;
    }
  }
`;

export const StyledIoNavicon = styled(IoNavicon)`
  float: right;
  margin-top: 6px;
  margin-left: 12px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const StyledIoClose = styled(IoClose)`
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;
