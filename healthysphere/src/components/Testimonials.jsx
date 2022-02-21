import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;
const Heading = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0;
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
