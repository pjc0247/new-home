import React, { useState } from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { ScrollArea } from 'atom/display';
import { YoutubePlayer } from 'atom/embed';
import { NavPanel, WindowTitlebar } from 'component/window';
import { GalleryGrid } from '../gallery/component';

// @ts-ignore
import * as rania from '../../asset/app/gallery/rania/*.png';

const AppIcon = require('asset/icon/vr.png').default;

enum ContentType {
  Index = 'video1',
  Index2 = 'video2',
  Gallery = 'gallery',
};

interface VRProps {
};
export const VR = ({
  ...props
}: VRProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Miniature TD',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Retro Fighter VR',
            onClick: () => setContentType(ContentType.Index2),
          },
          {
            icon: require('asset/icon/gallery.png').default,
            label: 'Retro Fighter VR',
            onClick: () => setContentType(ContentType.Gallery),
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/icon/vr.png').default}
          title="VR Games"
        />
        {contentType === ContentType.Index && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/Gl-8ULBj490"
          />
        )}
        {contentType === ContentType.Index2 && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/L8NKB-dcxW4"
          />
        )}
        {contentType === ContentType.Gallery && (
          <ScrollArea>
            <GalleryGrid
              items={Object.values(VR as any)}
            />
          </ScrollArea>
        )}
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
