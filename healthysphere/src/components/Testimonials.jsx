import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  margin: 20px 0;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /*  margin: 50px 0; */
`;
const Testimonials = () => {
  return (
    <Container>
      <Heading>What our users say!</Heading>
      <Wrapper>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
