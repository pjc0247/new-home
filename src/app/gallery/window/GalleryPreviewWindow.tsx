import React from 'react';
import styled from 'styled-components';

import { WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';

interface GalleryPreviewWindowProps {
  src: string;
};
export const GalleryPreviewWindow = ({
  src,
  ...props
}: GalleryPreviewWindowProps) => {
  return (
    <>
      <Content>
        <WindowTitlebar
          icon={require('asset/icon/gallery.png').default}
          title="Preview"
        />
        <Image
          src={src}
        />
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
`;
