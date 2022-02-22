import React from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  min-width: 380px;
  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }
`;
const QuoteContainer = styled.div`
  text-align: right;
  color: #e1dfdf;
`;
const Testimony = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 100px;
  color: #414146;
`;
const PersonDetail = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AvatarContainer = styled.span`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #f7f7f7;
`;
const Name = styled.span`
  font-weight: 400;
`;
const TestimonialCard = () => {
  return (
    <CardContainer>
      <QuoteContainer>
        <FormatQuoteOutlinedIcon style={{ fontSize: "60" }} />
      </QuoteContainer>
      <Testimony>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </Testimony>
      <PersonDetail>
        <AvatarContainer>
          <PermIdentityOutlinedIcon />
        </AvatarContainer>
        <Name>Nikhil yadav</Name>
      </PersonDetail>
    </CardContainer>
  );
};

export default TestimonialCard;
