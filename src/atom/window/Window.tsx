import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { observer } from 'mobx-react';

import { SquareShadow } from 'atom/shadow';
import { useStores } from 'state';
import { IWindow, IWindowRenderState, WindowRenderPhase } from 'state/window';
import { WindowHeader } from './WindowHeader';

interface WindowProps {
  width?: number;
  height?: number;
  window: IWindow;
  children: React.ReactNode;
};
export const Window = observer(({
  width = 640,
  height = 480,
  window,
  children,
  ...props
}: WindowProps) => {
  const { windowStore } = useStores();

  const onClose = () => {
    windowStore.removeWindow(window.id);
  };

  return (
    <Draggable>
      <Container
        width={width}
        height={height}
        renderState={window.renderState}
        {...props}
      >
        <SquareShadow
          width={width}
          height={height}
        />
        <WindowHeader
          onClose={onClose}
        />
        {children}
      </Container>
    </Draggable>
  );
});

const Container = styled.div<Partial<WindowProps> & {
  renderState: IWindowRenderState,
}>`
  position: relative;
  left: 100px;
  top: 100px;

  display: flex;
  width: max-content;
  height: max-content;

  background-color: rgba(20, 30, 40, 0.9);
  backdrop-filter: saturate(80%);

  ${({ width, height }) => `
    min-width: ${width}px;
    min-height: ${height}px;
  `}

  transition: all 0.5s ease;

  ${({ renderState: { renderPhase } }) => ({
    [WindowRenderPhase.FadeIn]: `
      animation: windowFadeIn 0.5s ease;
      animation-fill-mode: forwards;
    `,
    [WindowRenderPhase.Normal]: `
      opacity: 1;
    `,
    [WindowRenderPhase.FadeOut]: `
      animation: windowFadeOut 0.5s ease;
      animation-fill-mode: forwards;
    `,
  })[renderPhase!]}

  @keyframes windowFadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes windowFadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`;
