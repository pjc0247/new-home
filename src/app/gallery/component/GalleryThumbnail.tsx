import { Space } from 'atom/layout';
import React from 'react';
import styled from 'styled-components';
import { Align } from 'utils';

interface GalleryThumbnailProps {
  src: string;
};
export const GalleryThumbnail = ({
}: GalleryThumbnailProps) => {

  return (
    <Container>
      <Thumbnail
        src={require('asset/app/gallery/1.png').default}
      />
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

  width: 256px;
  height: 256px;

  border-radius: 10px;
  overflow: hidden;

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
const Overlay = styled.div`
  ${Align.Center}

  display: flex;
  flex-direction: column;

  position: absolute;
  left: -6px;
  top: -6px;

  width: calc(100% + 12px);
  height: calc(100% + 12px);

  background-color: rgba(32, 34, 37, 0.9);
  opacity: 0;

  transition: all 0.15s ease;
`;
const NameText = styled.div`
  color: white;

  font-size: 22px;
`;
const DateText = styled.div`
  color: rgba(255, 255, 255, 0.4);

  font-size: 20px;
`;
