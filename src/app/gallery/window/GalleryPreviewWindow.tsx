import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { useWindow, WindowTitlebar } from 'component/window';

interface GalleryPreviewWindowProps {
  src: string;
};
export const GalleryPreviewWindow = ({
  src,
  ...props
}: GalleryPreviewWindowProps) => {
  const window = useWindow();
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    if (!imageRef.current)
      return;

    window.setTimeout(() => {
      window.size = {
        width: window.size.width,
        height: imageRef.current!.offsetHeight + 36,
      };
    }, 100);
  }, []);

  return (
    <Content>
      <WindowTitlebar
        icon={require('asset/icon/gallery.png').default}
        title="Preview"
      />
      <Image
        ref={x => imageRef.current = x!}
        src={src}
      />
    </Content>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;

  overflow: hidden;
`;
