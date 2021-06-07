import React, { useState } from 'react';
import styled from 'styled-components';
import { HamburgerSlider } from 'react-animated-burgers';

import { Align } from 'utils';

interface NavPanelProps {
  icon: string;
};
export const NavPanel = ({
  icon,
  ...props
}: NavPanelProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Container
        expanded={expanded}
        {...props}
      >
        <IconContainer>
          <AppIcon
            src={icon}
          />
        </IconContainer>
        <Slot>
          <HamburgerSlider
            isActive={expanded}
            toggleButton={() => setExpanded(!expanded)}
            buttonStyle={{ padding: '0px' }}
            buttonWidth={18}
            barColor="white"
          />
        </Slot>
        <Slot>
          <SlotIcon
            src={require('asset/icon/star.png').default}
          />
        </Slot>
      </Container>
      <Placeholder
        expanded={expanded}
      />
    </>
  );
};

const Placeholder = styled.div<any>`
  transition: all 0.5s ease;

  ${({ expanded }: any) => expanded ? `
    width: 350px;
  ` : `
    width: 90px;
  `}
`;
const Container = styled.div<Partial<NavPanelProps> & any>`
  position: absolute;
  top: 0px;
  left: 0px;

  height: 100%;

  background-color: rgba(30, 40, 50, 0.8);

  transition: all 0.5s ease;

  ${({ expanded }: any) => expanded ? `
    width: 350px;
  ` : `
    width: 90px;
  `}
`;
const IconContainer = styled.div`
  ${Align.Center}
  justify-content: flex-start;

  width: 100%;
  height: 80px;

  padding-left: 30px;
`;
const AppIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const Slot = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 55px;

  padding-left: 35px;

  align-items: center;
`;
const SlotIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const SlotText = styled.div`
  color: white;
`;
