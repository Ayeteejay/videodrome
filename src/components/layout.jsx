import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Fade from "react-reveal/Fade";

const MainContainer = styled(Container)`
  padding: 2rem;
  background-color: rgb(0, 217, 186);
  hr {
    border-bottom: 1px solid black;
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Fade>
        <Header></Header>
        <MainContainer fluid>
          <Container>{children}</Container>
        </MainContainer>
        <Footer></Footer>
      </Fade>
    </React.Fragment>
  );
};
export default Layout;
