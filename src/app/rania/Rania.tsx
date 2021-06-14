import React, { useState } from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { ScrollArea } from 'atom/display';
import { YoutubePlayer } from 'atom/embed';
import { NavPanel, WindowTitlebar } from 'component/window';
import { GalleryGrid } from '../gallery/component';

// @ts-ignore
import * as rania from '../../asset/app/gallery/rania/*.png';

const AppIcon = require('asset/app/rania/icon.png').default;

enum ContentType {
  Index = 'video1',
  Index2 = 'video2',
  Gallery = 'gallery',
};

interface RaniaProps {
};
export const Rania = ({
  ...props
}: RaniaProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Video - 1',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/youtube.png').default,
            label: 'Video - 2',
            onClick: () => setContentType(ContentType.Index2),
          },
          {
            icon: require('asset/icon/gallery.png').default,
            label: 'Gallery',
            onClick: () => setContentType(ContentType.Gallery),
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/app/rania/icon.png').default}
          title="RaniaSaga"
        />
        {contentType === ContentType.Index && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/hIgLuF0bwJk"
          />
        )}
        {contentType === ContentType.Index2 && (
          <YoutubePlayer
            url="https://www.youtube.com/embed/wyei9DXiWTQ"
          />
        )}
        {contentType === ContentType.Gallery && (
          <ScrollArea>
            <GalleryGrid
              items={Object.values(rania as any)}
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
