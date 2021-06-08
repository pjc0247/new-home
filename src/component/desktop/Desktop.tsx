import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { Window } from 'atom/window';
import { Browser } from 'app/browser';
import { TaskBar } from 'component/taskbar';
import { useStores } from 'state';
import { Wallpaper } from './Wallpaper';
import { Shortcut } from './Shortcut';
import { Blade, BladeApp } from 'app/blade';
import { Gallery, GalleryApp } from 'app/gallery';
import { Github, GithubApp } from 'app/github';
import { App } from 'state/impl';
import { RookieApp } from 'app/rookie';
import { BlankApp } from 'app/blank';
import { CodepadApp } from 'app/codepad';

interface DesktopProps {

};
export const Desktop = observer(({

}: DesktopProps) => {
  const { windowStore } = useStores();

  return (
    <Container>
      <Wallpaper />
      <TaskBar />

      <ShortcutContainer>
        <Shortcut
          src={require('asset/app/blank/icon.png').default}
          name="Blank"
          onClick={() => App.launch(BlankApp)}
        />
        <Shortcut
          src={require('asset/app/blade/icon.png').default}
          name="Blade"
          onClick={() => App.launch(BladeApp)}
        />
        <Shortcut
          src={require('asset/icon/browser.png').default}
          name="WebBrowser"
          onClick={() => windowStore.addWindow(require('asset/icon/browser.png').default, (<Browser />))}
        />
        <Shortcut
          src={require('asset/icon/gallery.png').default}
          name="Gallery"
          onClick={() => App.launch(GalleryApp)}
        />
        <Shortcut
          src={require('asset/app/github/icon.png').default}
          name="Github"
          onClick={() => App.launch(GithubApp)}
        />
        <Shortcut
          src={require('asset/app/rookie/icon.png').default}
          name="Rookie"
          onClick={() => App.launch(RookieApp)}
        />
        <Shortcut
          src={require('asset/icon/code.png').default}
          name="Source Code"
          onClick={() => window.open('https://github.com/pjc0247/new-home')}
        />
        <Shortcut
          src={require('asset/icon/code.png').default}
          name="CodePad"
          onClick={() => App.launch(CodepadApp)}
        />
      </ShortcutContainer>

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