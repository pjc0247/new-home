import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Desktop, Shortcut } from 'component/desktop';
import { App } from 'state/app';
import { BladeApp } from 'app/blade';
import { GalleryApp } from 'app/gallery';
import { GithubApp } from 'app/github';
import { RookieApp } from 'app/rookie';
import { BlankApp } from 'app/blank';
import { CodepadApp } from 'app/codepad';
import { LineFeed, Push } from 'atom/layout';
import { LargeClock } from 'component/widget';
import { BrowserApp } from 'app/browser/app';
import { RaniaApp } from 'app/rania';
import { VRApp } from 'app/vr';
import { SlowSharpApp } from 'app/slowsharp';
import { IApp } from 'app/IApp';

export const DesktopPage = ({

}) => {
  const [searchParams] = useSearchParams();
  const app = searchParams.get('app');
  const argv = searchParams.get('argv');

  useEffect(() => {
    if (app) {
      let appToLaunch: IApp | undefined;
      appToLaunch = {
        'github': GithubApp,
        'vr': VRApp,
        'gallery': GalleryApp,
        'blade': BladeApp,
        'rania_saga': RaniaApp
      }[app];

      if (appToLaunch) {
        App.launch(appToLaunch, JSON.parse(argv || '{}'));
      }
    }
  }, [app, argv]);

  return(
    <Desktop>
      <SectionLabel>
        Personal Profile
      </SectionLabel>
      <Push />
      <LargeClock />
      <LineFeed />

      <Shortcut
        src={require('asset/app/github/icon.png').default}
        name="Github"
        onClick={() => App.launch(GithubApp)}
      />
      <LineFeed />

      <SectionLabel>
        Game Development
      </SectionLabel>
      <LineFeed />

      <Shortcut
        src={require('asset/icon/vr.png').default}
        name="VR Works"
        onClick={() => App.launch(VRApp)}
      />
      <Shortcut
        src={require('asset/app/youtubewall/icon.png').default}
        name="Youtube Wall"
        onClick={() => App.launch(BrowserApp, {
          url: 'https://pjc0247.github.io/youtube-wall/',
          width: 1400,
          height: 800,
        })}
      />
      <Shortcut
        src={require('asset/app/tower2d/icon.png').default}
        name="異世界TD"
        onClick={() => App.launch(BrowserApp, {
          url: 'https://www.youtube.com/embed/LRqARzM57YY',
          width: 480,
          height: 640,
        })}
      />
      <Shortcut
        src={require('asset/icon/gallery.png').default}
        name="Gallery"
        onClick={() => App.launch(GalleryApp)}
      />
      <Shortcut
        src={require('asset/app/blade/icon.png').default}
        name="Blade"
        onClick={() => App.launch(BladeApp)}
      />
      <Shortcut
        src={require('asset/app/rania/icon.png').default}
        name="RaniaSaga"
        onClick={() => App.launch(RaniaApp)}
      />
      <LineFeed />

      <div style={{ display: 'flex', width: '100%' }}>
        <div>
          <SectionLabel>
            Compilers
          </SectionLabel>
          <LineFeed />

          <Shortcut
            src={require('asset/app/rookie/icon.png').default}
            name="Rookie" 
            onClick={() => App.launch(RookieApp)}
          />
          <Shortcut
            src={require('asset/app/slowsharp/icon.png').default}
            name="SlowSharp"
            onClick={() => App.launch(SlowSharpApp)}
          />
          <LineFeed />
        </div>
        <div style={{ width: '360px' }} />
        <div>
          <SectionLabel>
            FE Development
          </SectionLabel>
          <LineFeed />
          <Shortcut
            src={require('asset/icon/rgb.png').default}
            name="ColorPicker"
            onClick={() => App.launch(BrowserApp, {
              url: 'https://pjc0247.github.io/index_old.html',
              width: 1024,
              height: 700,
            })}
          />
          <Shortcut
            src={require('asset/icon/manga.png').default}
            name="Kakao Webtoon"
            onClick={() => App.launch(BrowserApp, {
              url: 'https://www.youtube.com/embed/2PAI27KBBAY',
              width: 480,
              height: 740,
            })}
          />
          <LineFeed />
        </div>
      </div>

      <SectionLabel>
        Miscellaneous
      </SectionLabel>
      <LineFeed />
      <Shortcut
        src={require('asset/icon/rgb.png').default}
        name="ColorPicker"
        onClick={() => App.launch(BrowserApp, {
          url: 'https://pjc0247.github.io/index_old.html',
          width: 1024,
          height: 700,
        })}
      />
      <LineFeed />

      <SectionLabel>
        WebOS Playground
      </SectionLabel>
      <LineFeed />
      <Shortcut
        src={require('asset/app/blank/icon.png').default}
        name="Blank"
        onClick={() => App.launch(BlankApp)}
      />
      <Shortcut
        src={require('asset/app/codepad/icon.png').default}
        name="CodePad"
        onClick={() => App.launch(CodepadApp)}
      />
      <Shortcut
        src={require('asset/icon/code.png').default}
        name="Source Code"
        onClick={() => window.open('https://github.com/pjc0247/new-home')}
      />
    </Desktop>
  );
};

const SectionLabel = styled.div`
  color: white;

  font-size: 14px;

  user-select: none;
`;
