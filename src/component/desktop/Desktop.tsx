import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Window } from 'atom/window';
import { Browser } from 'app/browser';
import { TaskBar } from 'component/taskbar';
import { useStores } from 'state';
import { Wallpaper } from './Wallpaper';
import { Shortcut } from './Shortcut';
import { Blade } from 'app/blade';
import { Gallery } from 'app/gallery';

interface DesktopProps {

};
export const Desktop = observer(({

}: DesktopProps) => {
  const { windowStore } = useStores();

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <Shortcut
        src={require('asset/app/blade/icon.png').default}
        name="Blade"
        onClick={() => windowStore.addWindow(require('asset/app/blade/icon.png').default, (<Blade />))}
      />
      <Shortcut
        src={require('asset/icon/browser.png').default}
        name="WebBrowser"
        onClick={() => windowStore.addWindow(require('asset/icon/browser.png').default, (<Browser />))}
      />
      <Shortcut
        src={require('asset/icon/gallery.png').default}
        name="Gallery"
        onClick={() => windowStore.addWindow(require('asset/icon/gallery.png').default, (<Gallery />))}
      />

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
  position: relative;
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