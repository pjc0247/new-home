import React from 'react';
import styled from 'styled-components';
import Ripples from 'react-ripples';

import { RadialShadow } from 'atom/shadow';
import { Align } from 'utils';

interface ShortcutProps {
  src: string;
  name: string;
  onClick?: () => void;
};
export const Shortcut = ({
  src,
  name,
  onClick,
}: ShortcutProps) => {

  return (
    <Ripples
      color="rgba(255, 255, 255, 0.5)"
    >
      <Container
        onClick={onClick}
      >
        <ImageContainer>
          <RadialShadow
            width={36}
            height={36}
          />
          <Image
            src={src}
          />
        </ImageContainer>

        <NameText>
          {name}
        </NameText>
      </Container>
    </Ripples>
  );
};

const Container = styled.div`
  ${Align.Center}

  flex-direction: column;

  width: 90px;
  height: 90px;

  border-radius: 10px;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;

  overflow: hidden;
  border-radius: 7px;
  filter: drop-shadow(2px 4px 6px black);

  z-index: 1;

  object-fit: cover;
`;
const NameText = styled.div`
  color: white;

  font-size: 11px;

  user-select: none;
`;
