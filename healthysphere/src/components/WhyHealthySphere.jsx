import React from "react";
import delivery from "../assets/delivery.png";
import doctor from "../assets/doctor.png";
import video from "../assets/video.png";
import CardWhyhealthysphere from "./CardWhyhealthysphere";
import styled from "styled-components";

const WhyHealthySphereData = [
  {
    img: doctor,
    title: "Experienced doctor",
    desc: "Healthysphere offers the most convenient way of consulting experienced Homeopathy and Nutrition specialist to our customers",
  },
  {
    img: video,
    title: "Video Consultation",
    desc: "Best-in-class video consultation experience using your mobile phone at anytime and from anywhere",
  },
  {
    img: delivery,
    title: "Medicine Delivery",
    desc: "We will deliver the medicines dispensed or prescribed by the doctor to your doorstep",
  },
];

const MainContainer = styled.div`
  padding: 2rem;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 20px 0 80px 0;
`;
const CardWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
`;

const WhyHealthySphere = () => {
  return (
    <MainContainer>
      <Title>Why Healthysphere ?</Title>
      <CardWrapper>
        {WhyHealthySphereData.map((item) => (
          <CardWhyhealthysphere
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </CardWrapper>
    </MainContainer>
  );
};

export default WhyHealthySphere;
