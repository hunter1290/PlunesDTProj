import React from 'react'
import styled from 'styled-components'
import Dropdown from '../Dropdown'
import ToggleButton from '../ToggleButton'
import DetailCard from './DetailCard'

export default function CardWindow() {
  
 const dropList = ["Planned Admission Cases"]

  const cardData = [
    {
    id: '14',
    name: 'Priyanshu Raj',
    age: 27,
    phone: '7500190739',
    provider: 'Aditya Birla Health Insurance Company Ltd',
    hospital: 'Fortis Noida',
    treatment: 'Radiation Therapy',
    admittedDate: '06-Mar-2024',
    claimStatus: 'Initial Pending',
    hospitalOpsStatus: 'Status Yes',
    opsValue: 25,
  },{
    id: '14',
    name: 'Priyanshu Raj',
    age: 27,
    phone: '7500190739',
    provider: 'Aditya Birla Health Insurance Company Ltd',
    hospital: 'Fortis Noida',
    treatment: 'Radiation Therapy',
    admittedDate: '06-Mar-2024',
    claimStatus: 'Final Pending',
    hospitalOpsStatus: 'Status No',
    opsValue: 25,
  }
]

  return (
    <Main>
      <Top>
        <Dropdown list={dropList}/>
         <Dropdown/>
      </Top>
      <Mid>
         <ToggleButton/>
        <input type="text"  placeholder='🍳   Search'/>
      </Mid>
      <Bottom>
         {
          cardData.map((x,key)=>(
            <DetailCard key={key} {...x}/>
          ))
         }
      </Bottom>
    </Main>
  )
}

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid #c9c9c9;
border-radius: 5px;
padding: 10px;
gap: 6px;
`;
const Top = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;
const Mid = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

input{
  border: 1px solid #c9c9c9;
  padding: 5px;
  border-radius: 5px;
  height: 4vh;
}
`;
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
