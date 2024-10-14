import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const SwitchContainer = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isOn ? '#00d7df' : '#ccc')};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const SwitchKnob = styled.div`
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOn ? 'translateX(25px)' : 'translateX(0)')};
`;

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <SwitchContainer isOn={isOn} onClick={handleToggle}>
      <SwitchKnob isOn={isOn} />
    </SwitchContainer>
  );
};

export default ToggleButton;
