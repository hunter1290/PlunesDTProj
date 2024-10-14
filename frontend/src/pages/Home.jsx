import React from 'react'
import styled from 'styled-components'
import PatientStatus from '../components/dashboard/PatientStatus'
import SIP from '../components/dashboard/SIP'
import CardWindow from '../components/dashboard/CardWindow'

export default function Home() {
  return (
   <Main>
    <Left>
      <PatientStatus/>
      <SIP/>
    </Left>
    <Right>
      <CardWindow/>
    </Right>
   </Main>
  )
}

const Main = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 gap: 10px;
 padding: 5px;
`;

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`;
const Right = styled.div`
`;
