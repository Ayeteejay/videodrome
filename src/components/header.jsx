import Navbar from "react-bootstrap/Navbar";
import React from "react";
import styled from "styled-components";

const HeaderNavbar = styled(Navbar)`
  background-color: rgb(0, 217, 186);
  padding: 4rem 5rem 0 5rem;
  a {
    font-size: 1.5rem;
    transition: 1s;
  }
  a:hover {
    color: #ff0000 !important;
    // text-shadow: 0px 0px 10px rgba(255, 0, 0, 0.2);
  }
  span {
    font-weight: 700;
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
