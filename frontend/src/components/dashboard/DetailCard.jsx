import React from 'react';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
  border: 1px solid #00c851;
  border-radius: 10px;
  max-width: 500px;
  width: 90%; /* Make it responsive */
  padding: 15px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px auto; /* Center the card */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00c7c7;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  color: white;
  font-weight: bold;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Switch to single-column */
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #444;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 30%;

  @media (max-width: 480px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const StatusLabel = styled.span`
  font-size: 14px;
  color: #888;
`;

const StatusValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#444')};
`;

const HospitalStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ViewLink = styled.a`
  color: #00c7c7;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`;

const Icon = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

// Card Component
const DetailCard = ({
  id,
  name,
  age,
  phone,
  provider,
  hospital,
  treatment,
  admittedDate,
  claimStatus,
  hospitalOpsStatus,
  opsValue,
}) => {
  return (
    <CardContainer>
      <Header>
        <div>{`IP: ${id} - ${name}, ${age} yrs`}</div>
        <div>
          <Icon>📞</Icon> {phone}
        </div>
      </Header>

      <InfoSection>
        <InfoRow>
          <span>Service Provider-</span> <span>{provider}</span>
        </InfoRow>
        <InfoRow>
          <span>Hospital-</span> <span>{hospital}</span>
        </InfoRow>
        <InfoRow>
          <span>Treatment-</span> <span>{treatment}</span>
        </InfoRow>
      </InfoSection>

      <StatusContainer>
        <StatusBox>
          <Icon>🛏️</Icon>
          <StatusLabel>Admitted</StatusLabel>
          <StatusValue>{admittedDate}</StatusValue>
        </StatusBox>

        <StatusBox>
          <StatusLabel>Claim Status</StatusLabel>
          <StatusValue color="#8898f7">{claimStatus}</StatusValue>
        </StatusBox>

        <StatusBox>
          <StatusLabel>Hospital Ops Status</StatusLabel>
          <HospitalStatus>
            <StatusValue color="#00c851">{hospitalOpsStatus}</StatusValue>
            <StatusValue>{opsValue}</StatusValue>
            <ViewLink href="#">View</ViewLink>
          </HospitalStatus>
        </StatusBox>
      </StatusContainer>
    </CardContainer>
  );
};

export default DetailCard;
