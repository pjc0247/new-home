import React from 'react';
import styled from 'styled-components';

interface SquareShadowProps {
};
export const SquareShadow = ({
}: SquareShadowProps) => {
  return (
    <Container
    />
  );
};

const Container = styled.div<Partial<SquareShadowProps>>`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 100%;

  box-shadow: 0px 0px 23px rgb(0 0 0);

  pointer-events: none;
`;
