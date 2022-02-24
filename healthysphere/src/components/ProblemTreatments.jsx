import React from "react";
import styled from "styled-components";
import { largeMobile, mobile, tabletPlus } from "../responsive";
import ProblemCardTreatment from "./ProblemCardTreatment";
const problemTreatmentData = [
  {
    img: "https://i.ibb.co/9rN3gpF/Draw-Kit-Fathers-Day-Illustrations-06.png",
    title: "child not feeling well",
  },
  {
    img: "https://i.ibb.co/GtwJR54/irregular-painful-period.png",
    title: " Peroid doubts or Pragnancy",
  },
  {
    img: "https://i.ibb.co/PgnsXNv/Acne.png",
    title: "Skin and Hair problems",
  },
  {
    img: "https://i.ibb.co/wC5HjXb/coughing.png",
    title: "Cold,cough or fever",
  },
  {
    img: "https://i.ibb.co/kJwsjhs/12-mental-wellness.png",
    title: "Depression or anxiety",
  },
];
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;
const Container = styled.div``;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 40px 20px;

  ${largeMobile({
    padding: "0px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const TopLeft = styled.div`
  ${tabletPlus({ width: "50%" })}
  ${largeMobile({ width: "65%" })}
  ${mobile({ width: "90%" })}
`;
const TopTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  ${largeMobile({ fontSize: "24px", textAlign: "center" })}
`;
const TopDesc = styled.p`
  margin-top: 5px;
  color: #414146;
  font-size: 16px;
  ${largeMobile({ fontSize: "14px", textAlign: "center" })}
`;
const TopRight = styled.div`
  ${largeMobile({ width: "50%", marginTop: "24px" })}
  ${mobile({ width: "50%", marginTop: "18px" })}
`;
const Button = styled.div`
  font-size: 14px;
  color: teal;
  font-weight: 700;
  padding: 12px 16px;
  border: 2px solid teal;
  background-color: #fff;
  text-align: center;

  cursor: pointer;
  ${mobile({ marginTop: "24px" })}
  &:hover {
    color: #fff;
    background-color: teal;
    transition: all 0.2s ease;
  }
`;
const ButtomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${largeMobile({ marginTop: "30px" })}
`;
const ButtomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProblemTreatments = () => {
  return (
    <Main>
      <Container>
        <TopSection>
          <TopLeft>
            <TopTitle>Consult doctor online for any health concern</TopTitle>
            <TopDesc>
              Private online consultations with verified doctors
            </TopDesc>
          </TopLeft>
          <TopRight>
            <Button>View Specialities</Button>
          </TopRight>
        </TopSection>
        <ButtomSection>
          <ButtomWrapper>
            {problemTreatmentData.map((item, index) => (
              <ProblemCardTreatment
                key={index}
                img={item.img}
                title={item.title}
              />
            ))}
          </ButtomWrapper>
        </ButtomSection>
      </Container>
    </Main>
  );
};

export default ProblemTreatments;
