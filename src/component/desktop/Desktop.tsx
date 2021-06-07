import React from 'react';
import styled from 'styled-components';

import { TaskBar } from 'component/taskbar';
import { Window } from 'atom/window';
import { Wallpaper } from './Wallpaper';
import { Shortcut } from './Shortcut';
import { Browser } from 'app/browser';

interface DesktopProps {

};
export const Desktop = ({

}: DesktopProps) => {

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <Shortcut
        src={require('asset/app/blade/icon.png').default}
        name="Blade"
      />

      <Browser
      />
      <Window
      >
        sdf
      </Window>
    </Container>
  )
};

const Container = styled.div`
`;
