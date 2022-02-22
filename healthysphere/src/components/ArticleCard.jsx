import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 280px;
  margin: 0 10px;
`;
const Image = styled.img`
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
const Bottom = styled.div``;
const Tag = styled.div`
  color: teal;
  font-size: 12px;
  line-height: 1.25;
  margin-top: 15px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 5px;
`;
const Author = styled.div`
  font-size: 14px;
  color: #414146;
  margin-top: 10px;
`;

const ArticleCard = ({ img, tag, title }) => {
  return (
    <CardContainer>
      <Image src={img}></Image>
      <Bottom>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Author>Dr. Akshara Arora</Author>
      </Bottom>
    </CardContainer>
  );
};

export default ArticleCard;
