import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Window } from 'component/window';
import { TaskBar } from 'component/taskbar';
import { AppContextProvider } from 'state/app';
import { useStores } from 'state';
import { Wallpaper } from './Wallpaper';
import { WallpaperGrid } from './WallpaperGrid';

interface DesktopProps {
  children: React.ReactNode;
};
export const Desktop = observer(({
  children,
}: DesktopProps) => {
  const { appStore } = useStores();

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <WallpaperGrid
      >
        {children}
      </WallpaperGrid>

      <WindowContainer>
        {appStore.apps.map(app => (
          <AppContextProvider
            app={app}
          >
            {app.windows.map(window => (
              <Window
                key={window.id}
                window={window}
              />
            ))}
          </AppContextProvider>
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
const WindowContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;
