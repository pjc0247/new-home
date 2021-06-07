import React from 'react';
import styled from 'styled-components';
import Ripples from 'react-ripples';

export const withRipples = <TProps extends object>(Component: React.FC<TProps>) => (props: TProps) => {
  return (
    <RippleWrapper>
      <Ripples
        color="rgba(255, 255, 255, 0.5)"
        //@ts-ignore
        style={{ width: '100%' }}
      >
        <Component {...props} />
      </Ripples>
    </RippleWrapper>
  );
};

const RippleWrapper = styled.div`
  > div {
    width: 100%;
  }
`;
