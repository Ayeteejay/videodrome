import Navbar from "react-bootstrap/Navbar";
import React from "react";
import styled from "styled-components";

const HeaderNavbar = styled(Navbar)`
  background-color: rgba(0, 217, 186, 1);
  padding: 3% 10%;

  a {
    font-size: 1.5rem;
    transition: 1s;
  }
  a:hover {
    color: rgba(242, 38, 19, 1) !important;
    // text-shadow: 0px 0px 10px rgba(255, 0, 0, 0.2);
  }
  span {
    font-weight: 700;
  }
  @media screen and (max-width: 480px) {
    padding: 8% 10% 5% 10%;
  }
`;

const Header = () => {
  return (
    <HeaderNavbar>
      <Navbar.Brand href="/">
        <span>Videodrome</span>&trade;
      </Navbar.Brand>
    </HeaderNavbar>
  );
};
export default Header;
