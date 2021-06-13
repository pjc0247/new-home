import React from 'react';
import styled from 'styled-components';
import { GridComponent } from 'react-spring-animated-grid/dist';

import { GalleryThumbnail } from './GalleryThumbnail';

interface GalleryGridProps {
  items: string[],
};
export const GalleryGrid = ({
  items,
}: GalleryGridProps) => {

  return (
    <Container>
      <GridComponent
        itemMarginRight={10}
        itemMarginBottom={140}
        style={{ width: '100%', height: '600px' }}
      >
        {items.map((x, idx) => (
          <div key={idx}>
            <GalleryThumbnail
              src={x}
            />
          </div>
        ))}
      </GridComponent>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 12px 12px 12px;
`;
