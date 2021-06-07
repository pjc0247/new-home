import React from 'react';
import styled from 'styled-components';

import { Window, NavPanel } from 'atom/window';

const AppIcon = require('asset/icon/browser.png').default;

interface BrowserProps {
};
export const Browser = ({
  ...props
}: BrowserProps) => {
  return (
    <Window
    >
      <NavPanel
        icon={AppIcon}
      />
    </Window>
  );
};
