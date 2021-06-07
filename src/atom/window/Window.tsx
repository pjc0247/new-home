import React from 'react';
import styled from 'styled-components';

import { SquareShadow } from 'atom/shadow';
import { WindowHeader } from './WindowHeader';

interface WindowProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
};
export const Window = ({
  width = 320,
  height = 320,
  children,
  ...props
}: WindowProps) => {
  return (
    <Container
      width={width}
      height={height}
      {...props}
    >
      <SquareShadow
        width={width}
        height={height}
      />
      <WindowHeader
      />
      {children}
    </Container>
  );
};

const Container = styled.div<Partial<WindowProps>>`
  position: relative;
  left: 100px;
  top: 100px;

  width: max-content;
  height: max-content;

  background-color: rgba(20, 30, 40, 0.9);

  ${({ width, height }) => `
    min-width: ${width}px;
    min-height: ${height}px;
  `}
`;
