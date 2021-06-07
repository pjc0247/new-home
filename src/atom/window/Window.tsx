import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { observer } from 'mobx-react';

import { SquareShadow } from 'atom/shadow';
import { useStores } from 'state';
import { IWindow, IWindowRenderState, WindowRenderPhase } from 'state/window';
import { WindowHeader } from './WindowHeader';
import { WindowFadeIn, WindowFadeOut } from './style';

interface WindowProps {
  minWidth?: number;
  minHeight?: number;
  window: IWindow;
};
export const Window = observer(({
  minWidth = 640,
  minHeight = 480,
  window,
  ...props
}: WindowProps) => {
  const { windowStore } = useStores();
  const [size, setSize] = useState<ISize>({ width: minWidth, height: minHeight });
  const [previousSize, setPreviousSize] = useState<ISize>({ width: minWidth, height: minHeight });

  const onMaximize = () => {
    setSize({
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    });
  };
  const onClose = () => {
    windowStore.removeWindow(window.id);
  };

  return (
    <Draggable>
      <DragContainer>
        <Container
          size={size}
          minWidth={minWidth}
          minHeight={minHeight}
          renderState={window.renderState}
          {...props}
        >
          <SquareShadow
            width={minWidth}
            height={minHeight}
          />
          <WindowHeader
            onMaximize={onMaximize}
            onClose={onClose}
          />
          {window.Component}
        </Container>
      </DragContainer>
    </Draggable>
  );
});

const DragContainer = styled.div`
  position: absolute;
  display: inline-block;
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
  ${({ minWidth, minHeight }) => `
    min-width: ${minWidth}px;
    min-height: ${minHeight}px;
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
    [WindowRenderPhase.FadeOut]: `
      transition: all 0.5s ease;
      animation: windowFadeOut 0.5s ease;
      animation-fill-mode: forwards;
    `,
  })[renderPhase!]}

  ${WindowFadeIn}
  ${WindowFadeOut}
`;
