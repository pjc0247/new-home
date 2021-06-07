import React from 'react';
import styled from 'styled-components';

import { GalleryThumbnail } from './GalleryThumbnail';

interface GalleryGridProps {
};
export const GalleryGrid = ({
}: GalleryGridProps) => {

  return (
    <Container>
      <GalleryThumbnail
        src={require('asset/app/gallery/1.png').default}
      />
      <GalleryThumbnail
        src={require('asset/app/gallery/1.png').default}
      />
      <GalleryThumbnail
        src={require('asset/app/gallery/1.png').default}
      />
      <GalleryThumbnail
        src={require('asset/app/gallery/1.png').default}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  gap: 20px;

  overflow: auto;
`;
