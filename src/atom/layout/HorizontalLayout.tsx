import React from 'react';
import styled from 'styled-components';

interface HorizontalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  align?: 'none' | 'center';
  children: React.ReactNode;
};
export const HorizontalLayout = ({
  fill = false,
  align,
  children,
  ...props
}: HorizontalLayoutProps) => {
  return (
    <Container
      fill={fill}
      align={align}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<Partial<HorizontalLayoutProps>>`
  display: flex;
  flex-direction: row;

  ${({ fill }) => fill ? `
    flex: 1;
  ` : `
  `}
  ${({ align }) => ({
    none: `
    `,
    center: `
      align-items: center;
    `
  })[align!]}
`;
