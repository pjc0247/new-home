import React from 'react';
import styled from 'styled-components';

import { NavPanel, WindowTitlebar } from 'atom/window';
import { Space, VerticalLayout } from 'atom/layout';
import { GalleryGrid } from './component';

const AppIcon = require('asset/icon/gallery.png').default;

interface GalleryProps {
};
export const Gallery = ({
  ...props
}: GalleryProps) => {
  return (
    <>
      <NavPanel
        icon={AppIcon}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/icon/gallery.png').default}
          title="Gallery"
        />
        <GalleryGrid
        />
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;

  padding-left: 20px;
`;
