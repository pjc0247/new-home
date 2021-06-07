import React from 'react';
import styled from 'styled-components';

interface VerticalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  children: React.ReactNode;
};
export const VerticalLayout = ({
  fill = false,
  children,
  ...props
}: VerticalLayoutProps) => {
  return (
    <Container
      fill={fill}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<Partial<VerticalLayoutProps>>`
  display: flex;
  flex-direction: column;

  ${({ fill }) => fill ? `
    flex: 1;
  ` : `
  `}
`;
