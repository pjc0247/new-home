import React from 'react';
import styled from 'styled-components';

import { HorizontalLayout, Push } from 'atom/layout';
import { WindowImpl } from 'state/window';
import { Align } from 'utils';

interface WindowHeaderProps {
  window: WindowImpl;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
};
export const WindowHeader = ({
  window,
  onMinimize,
  onMaximize,
  onClose,
}: WindowHeaderProps) => {
  return (
    <Container>
      <Push />
      <NavButton
        src={require('asset/icon/minus.png').default}
        onClick={onMinimize}
      />
      <NavButton
        src={window.maximized
          ? require('asset/icon/fullscreen_exit.png').default
          : require('asset/icon/fullscreen.png').default}
        onClick={onMaximize}
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

  width: 30px;
  height: 27px;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
const ButtonIcon = styled.img`
  width: 10px;
  height: 10px;
`;
