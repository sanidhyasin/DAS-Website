import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {
  FaBars,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  /* background: transparent; */
  height: 120px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* position: sticky; */
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 70px;
    border-bottom: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  /* font-size: 1.5rem; */
  display: flex;
  align-items: center;
  margin-left: 24px;
  /* font-weight: bold; */
  text-decoration: none;
  width: 120px;

  @media screen and (max-width: 768px) {
    display: none;
    /* width: 100px; */
    /* height: 120px; */
  }
`;
const NavText = styled(LinkR)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-start;
    opacity: 1;
    color: #fff;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 8px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  /* color: black; */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  /* margin-right: 10px; */

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 200px;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled(LinkR)`
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  /* padding: 0 1rem; */
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
`;

const SocialItem = styled.li`
  /* height: 120px; */
  /* margin-right: 10px; */
  display: flex;
  color: white;
`;

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav className="">
        <NavbarContainer>
          <NavLogo className="flex items-center justify-center" href="/">
            <img
              className="w-32 flex"
              src="https://i.imgur.com/Jy2uNry.png"
              alt="digital asts society"
            />
            {/* <h1>DIGITAL ARTS SOCIETY</h1> */}
          </NavLogo>
          <NavText className="flex items-center justify-start">
            <h1 className="mr-2">Digital Arts Society</h1>
          </NavText>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                className="text-white hover:scale-105 transition-all"
                href="#about"
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks
                className="text-white hover:scale-105 transition-all tracking-tighter"
                to="about"
              >
                WHAT DO WE DO
              </NavLinks> */}
            </NavItem>
            <NavItem>
              <NavLinks
                className="text-white hover:scale-105 transition-all"
                href="#blog"
              >
                BLOG
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="text-white hover:scale-105 transition-all"
                href="#contact"
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="signup">SignUp</NavBtnLink>
          </NavBtn> */}
          <SocialMenu>
            <SocialLink>
              <SocialItem>
                <FaDiscord className="hover:scale-110 transition-all" />
              </SocialItem>
              <SocialItem>
                <FaTwitter className="hover:scale-110 transition-all" />
              </SocialItem>
              <SocialItem>
                <FaYoutube className="hover:scale-110 transition-all" />
              </SocialItem>
              <SocialItem>
                <FaInstagram className="hover:scale-110 transition-all" />
              </SocialItem>
            </SocialLink>
          </SocialMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
