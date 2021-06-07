import React from 'react';
import styled from 'styled-components';

interface PushProps {
};
export const Push = ({
  ...props
}: PushProps) => {
  return (
    <Container
      {...props}
    />
  );
};

const Container = styled.div`
  flex: 1;
`;
