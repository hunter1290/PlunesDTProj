import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';

export default function SIP() {
  const ListData = [
    { title: 'Under Process', number: '10', color: '#9AB0D8', bgColor: '#F1F6FF' },
    { title: 'Query', number: '10', color: '#F2A735', bgColor: '#FCF5EB' },
    { title: 'Initial Pending', number: '10', color: '#627FB5', bgColor: '#F1F6FF' },
    { title: 'Initial Received', number: '10', color: '#0075DB', bgColor: '#EDF7FF' },
    { title: 'Discharge Under Review', number: '10', color: '#27A468', bgColor: '#EAF8F1' },
    { title: 'Under Process', number: '10', color: '#9AB0D8', bgColor: '#F1F6FF' },
  ];

  return (
    <Main>
      <Top>
        <h4>SIP (Service In Progress)</h4>
        <Dropdown />
      </Top>
      <Bottom>
        {ListData.map((item, index) => (
          <Bar key={index}>
            <Title color={item.color}>{item.title}</Title>
            <Number style={{color:`${item.color}`, backgroundColor:`${item.bgColor}`,width:'12%',padding:'6px',textAlign:'center',border:`1px solid ${item.color}`,borderRadius:'5px'}}>{item.number}</Number>
            <ViewButton>View</ViewButton>
          </Bar>
        ))}
      </Bottom>
    </Main>
  );
}

const Main = styled.div`
  border: 1px solid #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 45vw;
  padding: 10px;
  border-radius: 12px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-weight: 800;
    color: #333;
    
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 40vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding-right: 10px;  */
`;

const Bar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.bgColor};
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  /* color: ${(props) => props.color}; */
  width: 30%;
`;

const Number = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const ViewButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #0075db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;
