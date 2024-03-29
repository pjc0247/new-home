import React, { useState } from 'react';
import styled from 'styled-components';

import { VerticalLayout } from 'atom/layout';
import { Crossfade } from 'atom/display';
import { NavPanel, WindowTitlebar } from 'component/window';
import { WindowImpl } from 'state/window';
import { useApp } from 'state/app';
import { CodeView } from 'app/codeview/CodeView';

const AppIcon = require('asset/app/slowsharp/icon.png').default;

enum ContentType {
  Index = 'index',
  Github = 'github',
  Files = 'files',
};

interface SlowSharpProps {
};
export const SlowSharp = ({
  ...props
}: SlowSharpProps) => {
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
                  url={'/repo/SlowSharp.zip'}
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
          title="SlowSharp"
        />
        {contentType === ContentType.Index && (
          <IFrame
            loading="lazy"
            src="https://pjc0247.github.io/UniScript/uniplayground/"
          />
        )}
        {contentType === ContentType.Github && (
          <IFrame
            loading="lazy"
            src="https://github-e.com/#/user/pjc0247/repos/SlowSharp"
          />
        )}
        {contentType === ContentType.Files && (
          <div />
        )}
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
