import styled from "styled-components";

import { largeMobile, mobile, tablet } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import healthysphere from "../assets/healthysphere.png";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 999;

  ${tablet({ display: "none" })}
  ${mobile({ height: "30px", display: "hidden" })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${largeMobile({ padding: "5px 10px" })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 60px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
  ${mobile({ height: "50px", width: "120px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${largeMobile({ marginLeft: "15px", fontSize: "12px" })}
`;

const ContainerSmall = styled.div`
  padding: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  display: none;
  ${tablet({ display: "block" })}
`;
const WrapperSmall = styled.div``;
const MainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DropDownMenu = styled.div`
  margin-top: 20px;
`;
const DDMenuItem = styled.div`
  height: 30px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  color: balck;
`;
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Image src={healthysphere}></Image>
          </Left>
          <Right>
            <MenuItem>HOME</MenuItem>

            <MenuItem>ABOUT</MenuItem>

            <MenuItem>CONTACT</MenuItem>
          </Right>
        </Wrapper>
      </Container>
      <ContainerSmall>
        <WrapperSmall>
          <MainMenu>
            <Left>
              <Image src={healthysphere}></Image>
            </Left>
            <Right>
              <MenuItem onClick={handleClick}>
                <MenuIcon></MenuIcon>
              </MenuItem>
            </Right>
          </MainMenu>
          {showMenu && (
            <DropDownMenu>
              <DDMenuItem>HOME</DDMenuItem>

              <DDMenuItem>ABOUT</DDMenuItem>

              <DDMenuItem>PROJECTS</DDMenuItem>

              <DDMenuItem>CONTACT</DDMenuItem>
            </DropDownMenu>
          )}
        </WrapperSmall>
      </ContainerSmall>
    </>
  );
};

export default Navbar;
