import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled(Container)`
  background-color: black;
  padding: 15% 10%;
`;

const VideoNasty = styled.div`
  p {
    color: white;
    font-size: 0.9rem;
  }
  a {
    transition: 1s;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: #ff0000 !important;
    // text-shadow: 0px 0px 10px rgba(255, 0, 0, 0.6);
  }
`;

const ILikeTurtles = styled.div`
  p {
    font-size: 1.3rem;
    line-height: 1.9rem;
    font-weight: 300;
    color: rgba(0, 217, 186, 1);
  }
`;
const VideodromeLink = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 0 2rem 0;
  transition: 1s;
  color: rgba(0, 217, 186, 0.6);
  :hover {
    text-decoration: none;
    color: #ff0000 !important;
  }
  span {
    font-weight: 300;
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer fluid>
        <Row>
          <Col sm={8}>
            <VideoNasty>
              <VideodromeLink>
                <a href="/">
                  Videodrome
                  <span>&trade;</span>
                </a>
              </VideodromeLink>
              <p>
                &#169; 2020 Adam Jones. Who are we kidding? No rights reserved.
                <br></br>Design and code by{" "}
                <a
                  href="https://www.ayeteejay.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ayeteejay
                </a>
                .
              </p>
            </VideoNasty>
          </Col>
          <Col sm={4}>
            <ILikeTurtles>
              <p>
                “Wise men say, 'Forgiveness is divine, but never pay full price
                for late pizza.” <span role="img">&#127829;</span>
              </p>
            </ILikeTurtles>
          </Col>
        </Row>
      </FooterContainer>
    </React.Fragment>
  );
};
export default Footer;
