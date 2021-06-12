import React, { useState } from 'react';
import styled from 'styled-components';

import { NavPanel, WindowTitlebar } from 'atom/window';
import { Space, VerticalLayout } from 'atom/layout';
import { Crossfade, ScrollArea } from 'atom/display';
import { GalleryGrid } from './component';

// @ts-ignore
import * as rania from '../../asset/app/gallery/rania/*.png';

const AppIcon = require('asset/icon/gallery.png').default;

enum ContentType {
  Index = 'index',
  Github = 'github',
};

interface GalleryProps {
};
export const Gallery = ({
  ...props
}: GalleryProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/github.png').default,
            label: 'Blade',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/github.png').default,
            label: 'Github',
            onClick: () => setContentType(ContentType.Github),
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/icon/gallery.png').default}
          title="Gallery"
        />
        {contentType === ContentType.Index && (
          <ScrollArea>
            <GalleryGrid
              items={[
                'https://youtu.be/-B57_SwaNng',
                require('asset/app/gallery/blade/1.png').default,
                require('asset/app/gallery/blade/1.png').default,
                require('asset/app/gallery/blade/1.png').default,
                require('asset/app/gallery/blade/1.png').default,
                require('asset/app/gallery/blade/1.png').default,
                require('asset/app/gallery/blade/1.png').default,
              ]}
            />
          </ScrollArea>
        )}
        {contentType === ContentType.Github && (
          <ScrollArea>
            <GalleryGrid
              items={[
                require('asset/app/gallery/boxel/1.png').default,
                ...(Object.values(rania as any)),
              ]}
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
