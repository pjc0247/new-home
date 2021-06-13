import React from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { Window, NavPanel, WindowTitlebar } from 'component/window';

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
          title="Web Browser"
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
