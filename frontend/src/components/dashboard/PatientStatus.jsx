// PatientStatus.js
import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';

export default function PatientStatus() {
  return (
    <Main>
      <Top>
        <h4>Patient Status</h4>
        <Dropdown />
      </Top>
      <Bottom>
        <StatusCard color="#E5BF59" bgColor="#FFF8E3" title="Intimations" subtitle="Patients" value={50} />
        <StatusCard color="#30C118" bgColor="#DFFFDA" title="Successful" subtitle="Claims" value={10} />
        <StatusCard color="#F93C23" bgColor="#FFEEEC" title="Rejected" subtitle="Claims" value={10} />
        <StatusCard color="#A06DD6" bgColor="#FBF1FF" title="Reimbursements" subtitle="cases" value={10} />
      </Bottom>
    </Main>
  );
}

const StatusCard = ({ color, bgColor, title, subtitle, value }) => (
  <Card bgColor={bgColor}>
    <Circle color={color}>{value}</Circle>
    <Detail>
      <h4 style={{ color:`${color}` }}>{title}</h4>
      <span style={{ fontWeight: '500',color }}>{subtitle}</span>
    </Detail>
  </Card>
);

const Main = styled.div`
  border: 1px solid #c9c9c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45vw;
  padding: 10px;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

const Card = styled.div`
  width: 18vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  padding: 10px;
  @media (max-width: 1280px) {
    width: 40vw;
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Circle = styled.p`
  background-color: ${({ color }) => color};
  color: white;
  padding: 15px;
  border-radius: 50%;
  font-weight: 600;
  text-align: center;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
