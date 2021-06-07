import React from 'react';
import styled from 'styled-components';

import { WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';

const AppIcon = require('asset/app/blade/icon.png').default;

interface BladeProps {
};
export const Blade = ({
  ...props
}: BladeProps) => {
  return (
    <>
      <Content>
        <WindowTitlebar
          icon={require('asset/icon/home.png').default}
        />
        <IFrame
          src="https://blade-e9841.web.app/"
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
