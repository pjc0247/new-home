import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout, Push } from 'atom/layout';
import { Align } from 'utils';

interface WindowHeaderProps {
  onClose: () => void;
};
export const WindowHeader = ({
  onClose,
}: WindowHeaderProps) => {
  return (
    <Container>
      <Push />
      <NavButton
        src={require('asset/icon/minus.png').default}
        onClick={() => {}}
      />
      <NavButton
        src={require('asset/icon/fullscreen.png').default}
        onClick={() => {}}
      />
      <NavButton
        src={require('asset/icon/close.png').default}
        onClick={onClose}
      />
    </Container>
  );
};

interface NavButtonProps {
  src: any;
  onClick: () => void;
};
const NavButton = ({
  src,
  onClick,
}: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
    >
      <ButtonIcon
        src={src}
      />
    </Button>
  );
};

const Container = styled(HorizontalLayout)`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
`;
const Button = styled.div`
  ${Align.Center}

  width: 45px;
  height: 40px;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
const ButtonIcon = styled.img`
  width: 15px;
  height: 15px;
`;
