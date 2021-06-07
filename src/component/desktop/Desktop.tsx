import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Window } from 'atom/window';
import { Browser } from 'app/browser';
import { TaskBar } from 'component/taskbar';
import { useStores } from 'state';
import { Wallpaper } from './Wallpaper';
import { Shortcut } from './Shortcut';

interface DesktopProps {

};
export const Desktop = observer(({

}: DesktopProps) => {
  const { windowStore } = useStores();

  useEffect(() => {
    windowStore.addWindow();
  }, []);

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <Shortcut
        src={require('asset/app/blade/icon.png').default}
        name="Blade"
      />

      {windowStore.windows.map(window => (
        <Window
          key={window.id}
          window={window}
        >
          sdf
        </Window>
      ))}
    </Container>
  )
});

const Container = styled.div`
`;
