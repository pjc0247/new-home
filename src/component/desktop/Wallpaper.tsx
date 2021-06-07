import React from 'react';
import styled from 'styled-components';

interface WallpaperProps {

};
export const Wallpaper = ({

}: WallpaperProps) => {

  return (
    <Container>
      <Image
        src={require('asset/wallpaper.png').default}
      />
    </Container>
  )
};

const Container = styled.div`
`;
const Image = styled.img`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;

  object-fit: cover;
`;
