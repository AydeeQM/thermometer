import { keyframes } from 'styled-components';

export const fadeFilled = (size) => keyframes`
  from{
    height: 0;
  }
  to{
    height: calc(100px - ${size}px);
  }
`;