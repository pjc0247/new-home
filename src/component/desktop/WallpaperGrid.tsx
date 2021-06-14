import React from 'react';
import styled from 'styled-components';

interface WallpaperGridProps {
  children: React.ReactNode;
};
export const WallpaperGrid = ({
  children,
}: WallpaperGridProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;
  width: 100%;

  flex-wrap: wrap;
  flex-direction: row;

  gap: 6px;
  padding: 20px 20px;

  pointer-events: none;

  > div {
    pointer-events: all;
  }
`;
