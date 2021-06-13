import React from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { WindowTitlebar } from 'component/window';

const AppIcon = require('asset/app/blank/icon.png').default;

interface BlankProps {
};
export const Blank = ({
  ...props
}: BlankProps) => {
  return (
    <Content>
      <WindowTitlebar
        icon={AppIcon}
        title="Blank"
      />
      <HelloWorldText>
        Hello World!
      </HelloWorldText>
    </Content>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const HelloWorldText = styled.div`
  color: white;

  font-size: 24px;

  margin: auto auto;
`;
