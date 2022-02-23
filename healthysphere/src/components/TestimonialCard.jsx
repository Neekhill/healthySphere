import React from "react";
import styled from "styled-components";
import nikhil from "../assets/nikhil.jpeg";
import { largeMobile, mobile } from "../responsive";

const CardContainer = styled.div`
  margin: 20px;
  min-width: 380px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #f0f0f5;
  -webkit-box-shadow: 0 3px 6px 0 rgb(45 45 51 / 8%);
  box-shadow: 0 3px 6px 0 rgb(45 45 51 / 8%);

  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }

  ${largeMobile({ minWidth: "330px" })}
  ${mobile({ minWidth: "290px" })}
`;
const PersonDetail = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Left = styled.div``;
const Image = styled.img`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
`;
const Right = styled.div``;
const Name = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;
const Occupation = styled.div`
  margin-top: 3px;
  line-height: 1.4;
  font-size: 14px;
`;

const Testimony = styled.div`
  margin-bottom: 20px;
  color: #676768;
  margin-top: 16px;
  line-height: 1.43;
  font-size: 14px;
`;

const TestimonialCard = ({ img, name, occupation }) => {
  return (
    <CardContainer>
      <PersonDetail>
        <Left>
          <Image src={img}></Image>
        </Left>
        <Right>
          <Name>{name}</Name>
          <Occupation>{occupation}</Occupation>
        </Right>
      </PersonDetail>
      <Testimony>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </Testimony>
    </CardContainer>
  );
};

export default TestimonialCard;
