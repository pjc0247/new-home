import React from 'react';
import styled from 'styled-components';

interface LineFeedProps {
};
export const LineFeed = ({
  ...props
}: LineFeedProps) => {
  return (
    <Container
      {...props}
    />
  );
};

const Container = styled.div`
  width: 100%;
`;
