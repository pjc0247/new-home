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

  // todotodotodoto
  // todotodotodoto

  return (
    <Container2>
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
    </Container2>
  );

  /*
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
  */
};

const Container2 = styled.div`
  padding: 12px 12px 12px 12px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;

  flex-direction: row;
  flex-wrap: wrap;

  gap: 20px;

  padding: 0px 20px 20px 20px;
`;
