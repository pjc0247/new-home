import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { WindowImpl } from 'state/impl';
import { Align } from 'utils';

enum IconStatus {
  None = 'none',
  Focused = 'focused',
  Active = 'active',
};

interface TaskBarIconProps {
  window: WindowImpl;
};
export const TaskBarIcon = observer(({
  window,
}: TaskBarIconProps) => {
  const status = window.isFocused
    ? IconStatus.Focused
    : (window.isActive ? IconStatus.Active : IconStatus.None);

  const onClick = () => {
    window.bringToFront();
  };

  return (
    <Container
      status={status}
      onClick={onClick}
    >
      <Icon
        status={status}
        src={window.icon}
      />
      <ActiveBar
        status={status}
      />
    </Container>
  )
});

const Container = styled.div<Partial<TaskBarIconProps> & any>`
  ${Align.Center}

  position: relative;

  width: 37px;
  height: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Icon = styled.img<Partial<TaskBarIconProps> & any>`
  width: 17px;
  height: 17px;

  border-radius: 5px;
`;
const ActiveBar = styled.div<Partial<TaskBarIconProps> & any>`
  position: absolute;
  bottom: 0px;

  margin-left: auto;
  margin-right: auto;

  transition: width, height 0.3s ease;

  ${({ status }: { status: IconStatus }) => ({
    [IconStatus.None]: `
    `,
    [IconStatus.Focused]: `
      width: 100%;
      height: 2.5px;
      background: linear-gradient(to right, #FAACA8, #DDD6F3);
    `,
    [IconStatus.Active]: `
      width: 85%;
      height: 1px;
      background: linear-gradient(to right, #FAACA8, #DDD6F3);
    `,
  })[status!]}
`;
