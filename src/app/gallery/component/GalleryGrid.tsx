import React from 'react';
import styled from 'styled-components';
import { GridComponent } from 'react-spring-animated-grid/dist';

import { GalleryThumbnail } from './GalleryThumbnail';

interface GalleryGridProps {
};
export const GalleryGrid = ({
}: GalleryGridProps) => {

  // todotodotodoto
  // todotodotodoto

  return (
    <Container2>
      <GridComponent
        itemMarginRight={15}
        itemMarginBottom={230}
        style={{ width: '100%', height: '600px' }}
      >
        {[1,2,3,4,5,6].map((x) => (
          <div key={x}>
            <GalleryThumbnail
              src={require('asset/app/gallery/1.png').default}
            />
          </div>
        ))}
      </GridComponent>
    </Container2>
  );

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

const Container2 = styled.div`
  padding: 0px 20px 20px 20px;
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
