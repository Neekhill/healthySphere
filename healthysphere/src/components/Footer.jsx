import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import healthysphere from "../assets/healthysphere.png";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background: #fef6f6; /* linear-gradient(
105.21deg
,#3743ab 2.85%,#141b56 99.41%) */
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0 20px;

  color: black;
  ${tablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column", padding: "20px 5px" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const LogoTitle = styled.h2``;
const Desc = styled.p`
  margin: 20px 0px;
  max-width: 350px;
  font-size: 14px;
  color: #414146;
`;
const Bold = styled.b``;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 120px;
  width: 160px;
  object-fit: cover;
`;
const CopyRight = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #414146;
`;
const Footer = () => {
  return (
    <Container>
      <TopWrapper>
        <Left>
          <LogoTitle>HealthySphere</LogoTitle>
          <Desc>
            A <Bold>Software Engineer</Bold> building <Bold>Full Stack </Bold>
            Websites and Web Applications that leads to the success of the
            overall product.Check out some of my work in the
            <Bold> Projects</Bold> section.
          </Desc>
          <SocialContainer>
            <SocialIcon color="FF0000">
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon color="E4405f">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="0077b5">
              <FacebookIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{ marginRight: "10px" }} /> 5,Westend Marg,
            Saidulajab, New Delhi-110030
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px" }} /> +91 8178067784
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
            mail@healthysphere.in
          </ContactItem>
        </Right>
      </TopWrapper>
      <BottomWrapper>
        <Logo src={healthysphere}></Logo>
        <CopyRight>
          Copyright © 2021,Healthysphere.All rights reserved.
        </CopyRight>
      </BottomWrapper>
    </Container>
  );
};

export default Footer;
