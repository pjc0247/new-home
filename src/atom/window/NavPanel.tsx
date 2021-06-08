import React, { useState } from 'react';
import styled from 'styled-components';
import { HamburgerSlider } from 'react-animated-burgers';

import { Align, Easing } from 'utils';
import { withRipples } from 'utils/hoc';
import { Space } from 'atom/layout';

interface NavPanelItem {
  icon: string;
  label: string;
  onClick: () => void;
};
interface NavPanelProps {
  icon?: string;
  items?: NavPanelItem[];
};
export const NavPanel = ({
  icon,
  items = [],
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
            buttonWidth={12}
            barColor="white"
          />
        </Slot>
        {items.map(x => (
          <Slot
            key={x.label}
            onClick={x.onClick}
          >
            <SlotIcon
              src={x.icon}
            />
            <Space width={11} />
            <SlotText
              expanded={expanded}
            >
              {x.label}
            </SlotText>
          </Slot>
        ))}
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
    width: 235px;
  ` : `
    width: 60px;
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
    width: 235px;
  ` : `
    width: 60px;
  `}
`;
const IconContainer = styled.div`
  ${Align.Center}

  justify-content: flex-start;

  width: 100%;
  height: 54px;

  padding-left: 20px;
`;
const AppIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Slot = withRipples(styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 37px;

  align-items: center;

  padding-left: 23.5px;

  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`);
const SlotIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const SlotText = styled.div<any>`
  color: white;

  font-size: 12px;

  transition: all 0.2s ease;

  ${({ expanded }) => expanded ? `
    opactiy: 1;
  ` : `
    opacity: 0;
  `}
`;
