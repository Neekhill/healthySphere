import React, { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { largeMobile } from "../responsive";

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${largeMobile({ padding: "30px 0px" })}
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const WrapperMain = styled.div`
  position: relative;
  width: 95%;
`;
const ArrowContainer = styled.span`
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.8;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 10;

  top: 0;
  bottom: 0;
  margin: auto;

  right: ${(prop) => (prop.position === "right" ? "0px" : <></>)};
`;
const WrapperCards = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const testimonialData = [
  {
    img: "https://i.ibb.co/CsDV6nT/Whats-App-Image-2021-12-06-at-11-10-03-AM.jpg",
    name: "Nikhil yadav",
    occupation: "28 yr old, IT professional",
  },
  {
    img: "https://i.ibb.co/qx88ydt/Whats-App-Image-2022-02-18-at-9-25-37-PM.jpg",
    name: "Akshara Arora",
    occupation: "26 yr old, Doctor",
  },
  {
    img: "https://i.ibb.co/CsDV6nT/Whats-App-Image-2021-12-06-at-11-10-03-AM.jpg",
    name: "Nikhil yadav",
    occupation: "28 yr old, IT professional",
  },
  {
    img: "https://i.ibb.co/qx88ydt/Whats-App-Image-2022-02-18-at-9-25-37-PM.jpg",
    name: "Akshara Arora",
    occupation: "26 yr old, Doctor",
  },
  {
    img: "https://i.ibb.co/CsDV6nT/Whats-App-Image-2021-12-06-at-11-10-03-AM.jpg",
    name: "Nikhil yadav",
    occupation: "28 yr old, IT professional",
  },
  {
    img: "https://i.ibb.co/qx88ydt/Whats-App-Image-2022-02-18-at-9-25-37-PM.jpg",
    name: "Akshara Arora",
    occupation: "26 yr old, Doctor",
  },
  {
    img: "https://i.ibb.co/CsDV6nT/Whats-App-Image-2021-12-06-at-11-10-03-AM.jpg",
    name: "Nikhil yadav",
    occupation: "28 yr old, IT professional",
  },
  {
    img: "https://i.ibb.co/qx88ydt/Whats-App-Image-2022-02-18-at-9-25-37-PM.jpg",
    name: "Akshara Arora",
    occupation: "26 yr old, Doctor",
  },
];
const Testimonials = () => {
  const wrapperCardRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left") {
      wrapperCardRef.current.scrollLeft =
        wrapperCardRef.current.scrollLeft - 500;
    }
    if (direction === "right") {
      wrapperCardRef.current.scrollLeft =
        wrapperCardRef.current.scrollLeft + 500;
    }
  };
  return (
    <Container>
      <Heading>What our users say!</Heading>
      <WrapperMain>
        <ArrowContainer
          onClick={() => {
            handleClick("left");
          }}
          style={{ fontWeight: "bold" }}
          position="left"
        >
          <ArrowBackIosIcon />
        </ArrowContainer>
        <WrapperCards ref={wrapperCardRef}>
          {testimonialData.map((slide, index) => (
            <TestimonialCard
              key={index}
              img={slide.img}
              name={slide.name}
              occupation={slide.occupation}
            />
          ))}
        </WrapperCards>
        <ArrowContainer
          onClick={() => {
            handleClick("right");
          }}
          position="right"
        >
          <ArrowForwardIosIcon />
        </ArrowContainer>
      </WrapperMain>
    </Container>
  );
};

export default Testimonials;
