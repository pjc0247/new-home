import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout, Push } from 'atom/layout';

interface WindowTitlebarProps {
  icon: string;
};
export const WindowTitlebar = ({
  icon,
}: WindowTitlebarProps) => {
  return (
    <Container
      align="center"
    >
      <AppIcon
        src={icon}
      />
    </Container>
  );
};

const Container = styled(HorizontalLayout)`
  width: 100%;
  height: 55px;

  padding-left: 32.5px;
`;
const AppIcon = styled.img`
  width: 22.5px;
  height: 22.5px;
`;
