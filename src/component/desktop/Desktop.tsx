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

      {windowStore.windows.map(window => (
        <Window
          key={window.id}
          window={window}
        />
      ))}
    </Container>
  )
});

const Container = styled.div`
`;
