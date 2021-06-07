import React from 'react';
import styled from 'styled-components';

import { Window, NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';

const AppIcon = require('asset/app/github/icon.png').default;

interface GithubProps {
};
export const Github = ({
  ...props
}: GithubProps) => {
  return (
    <>
      <NavPanel
        icon={AppIcon}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/app/github/icon.png').default}
          title="Github"
        />
        <IFrame
          src="https://github-e.com/#/user/pjc0247/repos/UniScript?_k=msw5wx"
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
