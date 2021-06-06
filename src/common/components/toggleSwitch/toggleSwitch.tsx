import React, { FC } from 'react';
import styled from 'styled-components';

const bgGreen = '#8BC34A';
const bgGray = '#78909C';

interface ISwitchProps {
  active: boolean;
  toggleSwitch: () => void;
}

const SwitchToggle = styled.div<Partial<ISwitchProps>>`
  position: relative;
  display: flex;
  width: 4rem;
  height: 2rem;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: ${ props => (props.active ? bgGreen : bgGray) };
  transition: all 0.25s ease;

  &:active {
    transform: scale(0.9);
  }
`;

const SwitchToggleIndicator = styled.div<Partial<ISwitchProps>>`
  position: relative;
  left: ${ props => (props.active ? '3rem' : '0.3rem') };
  width: ${ props => (props.active ? '7px' : '14px') };
  height: ${ props => (props.active ? '28px' : '14px') };
  border-radius: ${ props => (props.active ? '20px' : '50%') };
  border: ${ props => (props.active ? 'none' : '7px solid white') };
  background: ${ props => (props.active ? 'white' : 'transparent') };
  transition: all 0.25s ease;
`;


const Switch: FC<ISwitchProps> = ({ active, toggleSwitch }) => {

  return (
    <SwitchToggle active={active} onClick={ toggleSwitch }>
      <SwitchToggleIndicator active={active} />
    </SwitchToggle>
  );
};

export default Switch;
