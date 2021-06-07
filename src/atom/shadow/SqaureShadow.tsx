import React from 'react';
import styled from 'styled-components';

interface SquareShadowProps {
  width: number;
  height: number;
};
export const SquareShadow = ({
  width,
  height,
}: SquareShadowProps) => {
  return (
    <Container
      width={width}
      height={height}
    />
  );
};

const Container = styled.div<Partial<SquareShadowProps>>`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 100%;

  /*
  mix-blend-mode: overlay;
  filter: invert(1);
  
  border-image: url('${require('asset/gradient/square.png').default}') 23 fill;
  border-image-outset: 23px;
  border-image-width: 20px;
  */
  box-shadow: 0px 0px 23px rgb(0 0 0);

  pointer-events: none;
`;
