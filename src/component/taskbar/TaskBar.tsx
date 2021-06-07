import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { HorizontalShadow } from 'atom/shadow';
import { HorizontalLayout, Push } from 'atom/layout';
import { useStores } from 'state';
import { Clock } from './Clock';
import { TaskBarIcon } from './TaskBarIcon';
import { WindowRenderPhase } from 'state/window';

interface TaskBarProps {

};
export const TaskBar = observer(({

}: TaskBarProps) => {
  const { windowStore } = useStores();

  return (
    <Container>
      <HorizontalShadow />

      <HorizontalLayout
        fill
        align="center"
      >
        <Push />
        {windowStore.windows.map(window => (
          <TaskBarIcon
            key={window.id}
            window={window}
          />
        ))}
        <Push />
        <Clock />
      </HorizontalLayout>
    </Container>
  )
});

const Container = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;

  display: flex;
  width: 100%;
  height: 28px;

  background-color: rgba(25, 35, 45, 0.75);
`;
