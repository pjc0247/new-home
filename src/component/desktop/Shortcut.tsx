import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import { RadialShadow } from 'atom/shadow';
import { Align } from 'utils';

interface ShortcutProps {
  src: string;
  name: string;
};
export const Shortcut = ({
  src,
  name,
}: ShortcutProps) => {

  return (
    <Draggable>
      <Container>
        <ImageContainer>
          <RadialShadow
            width={60}
            height={60}
          />
          <Image
            src={src}
          />
        </ImageContainer>

        <NameText>
          {name}
        </NameText>
      </Container>
    </Draggable>
  )
};

const Container = styled.div`
  ${Align.Center}
  flex-direction: column;

  width: 125px;
  height: 125px;

  border-radius: 5px;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;

  overflow: hidden;
  border-radius: 10px;

  object-fit: cover;
`;
const NameText = styled.div`
  color: white;

  font-size: 16px;
`;
