import React from 'react';
import styled from 'styled-components';

import { Space } from 'atom/layout';
import { WindowImpl } from 'state/window';
import { useApp } from 'state/app';
import { Align } from 'utils';
import { GalleryPreviewWindow, GalleryYoutubeWindow } from '../window';

const AppIcon = require('asset/icon/gallery.png').default;

interface GalleryThumbnailProps {
  src: string;
};
export const GalleryThumbnail = ({
  src,
}: GalleryThumbnailProps) => {
  const app = useApp();
  const isYoutube = src?.includes('youtu');
  const youtubeId = src.match(/youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/)?.[1];

  const onClick = () => {
    if (isYoutube) {
      app.showWindow(
        AppIcon,
        (<GalleryYoutubeWindow youtubeId={youtubeId || ''} />)
      );
    } else {
      app.showWindow(
        AppIcon,
        (<GalleryPreviewWindow src={src} />)
      );
    }
  };

  return (
    <Container
      onClick={onClick}
    >
      <Thumbnail
        src={isYoutube ? `https://img.youtube.com/vi/${youtubeId}/0.jpg` : src}
      />
      {isYoutube && (
        <PlayIcon
          src={require('asset/icon/play.png').default}
        />
      )}
      <Overlay>
        <NameText>
          asdf
        </NameText>
        <Space height={32} />
        <DateText>
          pjc0247
        </DateText>
      </Overlay>
    </Container>
  );
};

// @ts-ignore
const Container = styled.div`
  position: relative;

  width: 170px;
  height: 170px;

  border-radius: 7px;
  overflow: hidden;

  background-color: rgba(128, 128, 128, 0.5);

  &:hover {
    img {
      transform: scale(1.25);
    }
    > div {
      opacity: 1;
    }
  }
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: all 0.35s ease;
`;
const PlayIcon = styled.img`
  position: absolute;
  right: 64px;
  bottom: 64px;

  width: 32px;
`;
const Overlay = styled.div`
  ${Align.Center}

  display: flex;
  flex-direction: column;

  position: absolute;
  left: -6px;
  top: -6px;

  width: calc(100% + 12px);
  height: calc(100% + 12px);

  background-color: rgba(32, 34, 37, 0.75);
  opacity: 0;

  transition: all 0.15s ease;
`;
const NameText = styled.div`
  color: white;

  font-size: 15px;
`;
const DateText = styled.div`
  color: rgba(255, 255, 255, 0.4);

  font-size: 13px;
`;
