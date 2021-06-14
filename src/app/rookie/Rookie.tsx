import React, { useState } from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { Crossfade } from 'atom/display';
import { NavPanel, WindowTitlebar } from 'component/window';
import { WindowImpl } from 'state/window';
import { useApp } from 'state/app';
import { CodeView } from 'app/codeview/CodeView';

const AppIcon = require('asset/app/rookie/icon.png').default;

enum ContentType {
  Index = 'index',
  Github = 'github',
  Files = 'files',
};

interface RookieProps {
};
export const Rookie = ({
  ...props
}: RookieProps) => {
  const app = useApp();
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/puzzle.png').default,
            label: 'Playground',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/github.png').default,
            label: 'Github',
            onClick: () => setContentType(ContentType.Github),
          },
          {
            icon: require('asset/icon/code.png').default,
            label: 'SourceCode',
            onClick: () => {
              app.showWindow(
                require('asset/icon/code.png').default,
                <CodeView
                  language="cpp"
                  url={'/repo/rookie.lang.zip'}
                />,
                {
                  width: 1040,
                  height: 640,
                },
              );
            },
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          title="Rookie"
        />
        <Crossfade
          style={{ background: 'rgba(240, 240, 240, 0.8)' }}
        >
          {contentType === ContentType.Index && (
            <IFrame
              loading="lazy"
              src="https://pjc0247.github.io/try-rookie/"
            />
          )}
          {contentType === ContentType.Github && (
            <IFrame
              loading="lazy"
              src="https://github-e.com/#/user/pjc0247/repos/rookie.lang"
            />
          )}
          {contentType === ContentType.Files && (
            <div />
          )}
        </Crossfade>
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const IFrame = styled.iframe.attrs({
  frameBorder: 'none',
})`
  flex: 1;
`;
