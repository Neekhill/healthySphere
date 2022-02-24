import React from "react";
import styled from "@emotion/styled";
const ProblemContainer = styled.div`
  width: 180px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  width: 180px;
 margin:20px
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #414146;
`;

const Button = styled.div`
  color: teal;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 700;
`;

const ProblemCardTreatment = ({ img, title }) => {
  return (
    <ProblemContainer>
      <ImageContainer>
        <Image src={img} alt={title}></Image>
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Button>CONSULT NOW</Button>
      </InfoContainer>
    </ProblemContainer>
  );
};

export default ProblemCardTreatment;
