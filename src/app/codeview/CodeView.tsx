import React, { useState } from 'react';
import styled from 'styled-components';

import { Window, NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';
import { Ide } from 'component/ide';

const AppIcon = require('asset/icon/code.png').default;

interface CodeViewProps {
  language: string;
  url: string;
};
export const CodeView = ({
  language,
  url,
  ...props
}: CodeViewProps) => {

  return (
    <Content>
      <WindowTitlebar
        icon={AppIcon}
        title="CodeView"
      />
      <Ide
        language={language}
        url={url}
      />
    </Content>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
