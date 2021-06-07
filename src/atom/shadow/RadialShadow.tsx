import React from 'react';
import styled from 'styled-components';
import { ShadowImage } from './ShadowImage';

interface RadialShadowProps {
  width: number;
  height: number;
};
export const RadialShadow = ({
  width,
  height,
}: RadialShadowProps) => {
  return (
    <Container
      src={require('asset/gradient/radial.png').default}
      width={width}
      height={height}
    />
  );
};

const Container = styled(ShadowImage)<Partial<RadialShadowProps>>`
  position: absolute;
  left: -35px;
  top: -35px;

  opacity: 0.65;

  z-index: -1;

  ${({ width, height }) => `
    width: ${width! + 70}px;
    height: ${height! + 70}px;
  `}
`;
