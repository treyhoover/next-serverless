import React from 'react';
import styled from 'styled-components';
import { getThemed } from '../styles/helpers';

type Props = {
  margin?: string;
  padding?: string;
  color?: string;
};

const Title: React.SFC<Props> = styled.h1<Props>`
  ${getThemed('margin')}
  ${getThemed('padding')}
  ${getThemed('color')}
  font-size: 3rem;
`;

Title.defaultProps = {
  color: 'red',
};

export default Title;
