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
  MiniatureTDVideo = 'miniature_td_video',
  MiniatureTDWeb = 'miniature_td_web',
  Index2 = 'video2',
  DizzySimulator = 'dizzy_video',
  Gallery = 'gallery',
};

interface VRProps {
};
export const VR = ({
  ...props
}: VRProps) => {
  const [contentType, setContentType] = useState(ContentType.MiniatureTDWeb);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/browser.png').default,
            label: 'Miniature TD - Website',
            onClick: () => setContentType(ContentType.MiniatureTDWeb),
          },
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Miniature TD',
            onClick: () => setContentType(ContentType.MiniatureTDVideo),
          },
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Retro Fighter VR',
            onClick: () => setContentType(ContentType.Index2),
          },
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Dizzy Simulator',
            onClick: () => setContentType(ContentType.DizzySimulator),
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
          title="VR Games"
        />
        {contentType === ContentType.MiniatureTDVideo && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/Gl-8ULBj490"
          />
        )}
        {contentType === ContentType.MiniatureTDWeb && (
          <YoutubePlayer
            url="https://miniaturetd.herokuapp.com/"
          />
        )}
        {contentType === ContentType.Index2 && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/L8NKB-dcxW4"
          />
        )}
        {contentType === ContentType.DizzySimulator && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/us9ClIw7xp4"
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
