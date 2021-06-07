import React from 'react';
import styled from 'styled-components';

import { Window, NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';

const AppIcon = require('asset/icon/browser.png').default;

interface BrowserProps {
};
export const Browser = ({
  ...props
}: BrowserProps) => {
  return (
    <>
      <NavPanel
        icon={AppIcon}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/icon/home.png').default}
        />
        <IFrame
          src="https://www.google.com"
        />
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const IFrame = styled.iframe.attrs({
  frameBorder: 'none',
})`
  flex: 1;
`;
