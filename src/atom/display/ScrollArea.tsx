import React from 'react';
import styled from 'styled-components';
import Scrollbar from 'smooth-scrollbar';

interface ScrollAreaProps {
  children: React.ReactNode;
};
export const ScrollArea = ({
  children,
}: ScrollAreaProps) => {
  return (
    <Container
      ref={ref => {
        if (!ref) return;
        Scrollbar.init(ref, {});
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
`;
