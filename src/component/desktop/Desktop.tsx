import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Window } from 'component/window';
import { TaskBar } from 'component/taskbar';
import { useStores } from 'state';
import { Wallpaper } from './Wallpaper';
import { WallpaperGrid } from './WallpaperGrid';


interface DesktopProps {
  children: React.ReactNode;
};
export const Desktop = observer(({
  children,
}: DesktopProps) => {
  const { windowStore } = useStores();

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <WallpaperGrid
      >
        {children}
      </WallpaperGrid>

      <WindowContainer>
        {windowStore.windows.map(window => (
          <Window
            key={window.id}
            window={window}
          />
        ))}
      </WindowContainer>
    </Container>
  )
});

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const ShortcutContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;
  width: 100%;

  flex-wrap: wrap;
  flex-direction: row;

  gap: 12px;

  pointer-events: none;

  padding: 20px 20px;

  > div {
    pointer-events: all;
  }
`;
const WindowContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;