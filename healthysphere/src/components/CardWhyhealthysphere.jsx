import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  margin: 30px;
  max-width: 350px;
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
const Title = styled.h3`
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
const Desc = styled.p`
  text-align: center;
  max-width: 270px;
  font-size: 14px;
  color: #414146;
`;

const CardWhyhealthysphere = ({ img, title, desc }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={img}></Image>
      </ImageContainer>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default CardWhyhealthysphere;
