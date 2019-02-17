import { css } from 'styled-components';

export const getThemed = (cssProp: string) => css`
  ${cssProp}: ${({ theme, ...props }) => {
    const value = props[cssProp];

    return theme[value] || value;
  }};
`;
