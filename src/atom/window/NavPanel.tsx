import React, { useState } from 'react';
import styled from 'styled-components';
import { HamburgerSlider } from 'react-animated-burgers';

import { Align, Easing } from 'utils';
import { withRipples } from 'utils/hoc';
import { Space } from 'atom/layout';

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
        <Slot
          onClick={() => setExpanded(!expanded)}
        >
          <HamburgerSlider
            isActive={expanded}
            buttonStyle={{ padding: '0px' }}
            buttonWidth={18}
            barColor="white"
          />
        </Slot>
        <Slot>
          <SlotIcon
            src={require('asset/icon/star.png').default}
          />
          <Space width={16} />
          <SlotText
            expanded={expanded}
          >
            Favo
          </SlotText>
        </Slot>
      </Container>
      <Placeholder
        expanded={expanded}
      />
    </>
  );
};

const Placeholder = styled.div<any>`
  transition: all 0.5s ${Easing.ExpoOut};

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

  overflow: hidden;
  transition: all 0.5s ${Easing.ExpoOut};

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
const Slot = withRipples(styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 55px;

  align-items: center;

  padding-left: 35px;

  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
const SlotIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const SlotText = styled.div<any>`
  color: white;

  transition: all 0.2s ease;

  ${({ expanded }) => expanded ? `
    opactiy: 1;
  ` : `
    opacity: 0;
  `}
`;
