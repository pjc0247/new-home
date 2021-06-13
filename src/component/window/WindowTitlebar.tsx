import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout, Push, Space } from 'atom/layout';
import { useWindow } from './WindowContext';

interface WindowTitlebarProps {
  icon?: string;
  title: string;
};
export const WindowTitlebar = ({
  icon,
  title,
}: WindowTitlebarProps) => {
  const window = useWindow();

  return (
    <Container
      align="center"
    >
      {icon && (
        <>
          <AppIcon
            src={icon}
          />
          <Space width={16} />
        </>
      )}
      <TitleText>
        {window.title || title.toUpperCase()}
      </TitleText>
    </Container>
  );
};

const Container = styled(HorizontalLayout)`
  width: 100%;
  height: 37px;

  padding-left: 12px;
`;
const AppIcon = styled.img`
  width: 16px;
`;
const TitleText = styled.div`
  color: white;

  font-size: 12px;
  font-weight: bold;
`;
