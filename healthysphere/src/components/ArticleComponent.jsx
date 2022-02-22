import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
const ArticleCardData = [
  {
    tag: "CORONAVIRUS",
    title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
    img: "https://i.ibb.co/tmsc2Lg/5fd27b74d9477cb633445cf3f105078bbc479910.jpg",
  },
  {
    tag: "VITAMINS AND SUPPLEMENTS",
    title: "Eating Right to Build Immunity Against Cold and Viral Infections",
    img: "https://i.ibb.co/qsKC4mG/bade52edc7fb158bf627216bf96c2b881a97f30c.jpg",
  },
];

const ArticleContainer = styled.div``;
const Hr = styled.hr`
  border: 0.3px solid #eaeaea;
  width: 80%;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
`;
const Left = styled.div`
  max-width: 380px;
  margin: 30px 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;
const Desc = styled.p`
  color: #414146;
  font-size: 14px;
  margin-top: 5px;
  max-width: 310px;
`;
const Button = styled.button`
  padding: 15px 30px;
  background-color: #14bef0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  border: 0;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 30px;
`;
const Right = styled.div`
  display: flex;
`;
const ArticleComponent = () => {
  return (
    <ArticleContainer>
      <Hr />
      <Wrapper>
        <Left>
          <Title>Read top articles from health experts</Title>
          <Desc>
            Health articles that keep you informed about good health and achieve
            your goals
          </Desc>
          <Button>See all articles</Button>
        </Left>
        <Right>
          {ArticleCardData.map((item) => (
            <ArticleCard img={item.img} tag={item.tag} title={item.title} />
          ))}
        </Right>
      </Wrapper>
      <Hr />
    </ArticleContainer>
  );
};

export default ArticleComponent;
