import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout, Push, Space } from 'atom/layout';

interface WindowTitlebarProps {
  icon: string;
  title: string;
};
export const WindowTitlebar = ({
  icon,
  title,
}: WindowTitlebarProps) => {
  return (
    <Container
      align="center"
    >
      <TitleText>
        {title.toUpperCase()}
      </TitleText>
    </Container>
  );
};

const Container = styled(HorizontalLayout)`
  width: 100%;
  height: 37px;

  padding-left: 16px;
`;
const AppIcon = styled.img`
  width: 22.5px;
  height: 22.5px;
`;
const TitleText = styled.div`
  color: white;

  font-size: 12px;
  font-weight: bold;
`;
