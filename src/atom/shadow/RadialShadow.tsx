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
  left: -15px;
  top: -15px;

  opacity: 0.45;

  ${({ width, height }) => `
    width: ${width! + 30}px;
    height: ${height! + 30}px;
  `}
`;
