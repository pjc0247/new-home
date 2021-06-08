import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Draggable, { DraggableData } from 'react-draggable';
import { observer } from 'mobx-react';

import { SquareShadow } from 'atom/shadow';
import { WindowImpl } from 'state/impl';
import { IWindowRenderState, WindowRenderPhase } from 'state/window';
import { useStores } from 'state';
import { WindowHeader } from './WindowHeader';
import { WindowFadeIn, WindowFadeOut, WindowMinimize } from './style';

interface WindowProps {
  window: WindowImpl;
};
export const Window = observer(({
  window,
  ...props
}: WindowProps) => {
  const { windowStore } = useStores();

  const onMouseDown = () => {
    if (!window.isFocused)
      window.bringToFront();
  };
  const onDragStop = (e: any, data: DraggableData) => {
    window.savePosition(data.x, data.y);
  };
  const onMinimize = () => {
    window.minimize();
  };
  const onMaximize = () => {
    if (window.maximized) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  };
  const onClose = () => {
    windowStore.removeWindow(window.id);
  };

  return (
    <Draggable
      position={window.position}
      onMouseDown={onMouseDown}
      onStop={onDragStop}
    >
      <DragContainer
        ref={(ref: any) => window.saveRef(ref)}
        isActive={window.isActive}
        zIndex={window.zIndex}
      >
        <Container
          size={window.size}
          renderState={window.renderState}
          {...props}
        >
          <SquareShadow />
          <WindowHeader
            window={window}
            onMinimize={onMinimize}
            onMaximize={onMaximize}
            onClose={onClose}
          />
          {window.Component}
        </Container>
      </DragContainer>
    </Draggable>
  );
});

const DragContainer = styled.div<any>`
  position: absolute;
  display: inline-block;

  ${({ zIndex }) => `
    z-index: ${zIndex};
  `}
  ${({ isActive }) => isActive ? `
    pointer-events: none;
  ` : `
    pointer-events: all;
  `}
`;
const Container = styled.div<Partial<WindowProps> & {
  size: ISize,
  renderState: IWindowRenderState,
}>`
  position: relative;

  display: flex;

  background-color: rgba(20, 30, 40, 0.9);
  backdrop-filter: saturate(80%);

  ${({ size }) => `
    width: ${size.width}px;
    height: ${size.height}px;
  `}

  ${({ renderState: { renderPhase } }) => ({
    [WindowRenderPhase.FadeIn]: `
      transition: all 0.5s ease;
      animation: windowFadeIn 0.5s ease;
      animation-fill-mode: forwards;
    `,
    [WindowRenderPhase.Normal]: `
      opacity: 1;
    `,
    [WindowRenderPhase.Minimize]: `
      transition: all 0.35s ease;
      animation: windowMinimize 0.35s ease;
      animation-fill-mode: forwards;
    `,
    [WindowRenderPhase.FadeOut]: `
      transition: all 0.5s ease;
      animation: windowFadeOut 0.5s ease;
      animation-fill-mode: forwards;
    `,
  })[renderPhase!]}

  ${WindowFadeIn}
  ${WindowFadeOut}
  ${WindowMinimize}
`;
