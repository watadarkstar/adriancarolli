/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const StyledForm = styled(Form)`
  && {
    display: block;
    padding-bottom: 100px;
    max-width: 600px;
    margin: auto;
    text-align: left;
  }
`;

export const StyledInput = styled(Form.Input)`
  &&& {
    label {
      font-size: 1em;
      font-weight: 600;
    }
  }
`;
