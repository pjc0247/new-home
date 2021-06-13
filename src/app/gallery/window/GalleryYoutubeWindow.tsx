import React from 'react';
import styled from 'styled-components';

import { WindowTitlebar } from 'component/window';
import { VerticalLayout } from 'atom/layout';

interface GalleryYoutubeWindowProps {
  youtubeId: string;
};
export const GalleryYoutubeWindow = ({
  youtubeId,
  ...props
}: GalleryYoutubeWindowProps) => {
  return (
    <>
      <Content>
        <WindowTitlebar
          icon={require('asset/icon/gallery.png').default}
          title="Video"
        />
        <EmbedYoutube
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const EmbedYoutube = styled.iframe`
  width: 100%;
  height: 100%;
`;
