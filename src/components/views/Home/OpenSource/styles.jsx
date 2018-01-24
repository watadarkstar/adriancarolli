/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { IoSocialGithub } from 'react-icons/lib/io';
import { Button } from 'semantic-ui-react';

export const StyledH2 = styled.h2`
  font-size: 1.3em;
  font-weight: 600;
  padding-top: 20px;
`;

export const StyledReactImg = styled.img`
  width: 62px;
  height: 62px;
  color: #ff0000;
  position: relative;
  top: 3px;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 60px;
  }
`;

export const StyledIoSocialGithub = styled(IoSocialGithub)`
  && {
    margin-top: -3px;
  }
`;
