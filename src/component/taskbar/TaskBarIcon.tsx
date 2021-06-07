import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Align } from 'utils';

interface TaskBarIconProps {
  active: boolean;
  icon: string;
};
export const TaskBarIcon = observer(({
  active,
  icon,
}: TaskBarIconProps) => {
  return (
    <Container
      active={active}
    >
      <Icon
        active={active}
        src={icon}
      />
      <ActiveBar
        active={active}
      />
    </Container>
  )
});

const Container = styled.div<Partial<TaskBarIconProps>>`
  ${Align.Center}

  position: relative;

  width: 37px;
  height: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Icon = styled.img<Partial<TaskBarIconProps>>`
  width: 17px;
  height: 17px;

  border-radius: 5px;
`;
const ActiveBar = styled.div<Partial<TaskBarIconProps>>`
  position: absolute;
  bottom: 0px;

  background-color: red;

  margin-left: auto;
  margin-right: auto;

  transition: width 0.3s ease;

  ${({ active }) => active ? `
    width: 100%;
    height: 2.5px;
  ` : `
    width: 0%;
    height: 2.5px;
  `}
`;
