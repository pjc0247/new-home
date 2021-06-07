import React from 'react';
import styled from 'styled-components';

import { ShadowImage } from './ShadowImage';

interface HorizontalShadowProps {
  offsetY?: number;
};
export const HorizontalShadow = ({
  offsetY = -10,
}: HorizontalShadowProps) => {
  return (
    <Container
      src={require('asset/gradient/horizontal.png').default}
      offsetY={offsetY}
    />
  );
};

const Container = styled(ShadowImage)<Partial<HorizontalShadowProps>>`
  position: absolute;
  left: 0px;
  top: ${({ offsetY }) => offsetY}px;

  width: 100%;
  height: 10px;
`;
