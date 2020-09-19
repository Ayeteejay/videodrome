import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Layout from "./components/layout.jsx";
import Image from "react-bootstrap/Image";
import Videoblock from "./components/videoblock.jsx";
import SeptData from "./data/septData.jsx";
import Dropdown from "react-bootstrap/Dropdown";
import Fade from "react-reveal/Fade";
import Tape from "./images/vhs-tape.jpg";

const IntroRow = styled(Row)`
  padding: 8% 0 12% 0;
  p {
    font-size: 3rem;
    line-height: 3.8rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  @media screen and (max-width: 480px) {
    p,
    h1 {
      font-size: 2.3rem;
      line-height: 2.8rem;
    }
  }
`;

const SeptemberRow = styled(Row)`
  padding: 4rem 0;
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`;

const VHSCol = styled.div`
  position: relative;
  padding: 15%;
  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`;

const VHS = styled(Image)`
  position: relative;
  border-radius: 5px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 1);
  transition: 1s;
  :hover {
    transform: scale(1.05) translateY(-30px);
    box-shadow: 2px 15px 25px rgba(0, 0, 0, 1);
  }
`;

const App = () => {
  const [videoContent, setVideoContent] = useState(SeptData);
  const [categoryFilter, setCategoryFilter] = useState("None");
  return (
    <Layout>
      <IntroRow>
        <Col sm={8}>
          <h1>Are you looking for the raddest most obscure videos?</h1>
          <p>Lost VHS specials? Outsider animation? Weird documentaries?</p>
          <p>
            We got you. We've curated the nuggets of the interwebs for your
            viewing pleasure.
          </p>
          <p>Let's dive in.</p>
        </Col>
        <Col sm={4}>
          <VHSCol>
            <VHS src={Tape} fluid />
          </VHSCol>
        </Col>
      </IntroRow>
      <hr></hr>
      <SeptemberRow>
        <Col sm={9}>
          <h2>September</h2>
          <p>Some good, some bad.</p>
        </Col>
        <Col sm={3}>
          <Dropdown>
            <Dropdown.Toggle>Filter</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => setCategoryFilter("Animation")}>
                Animation
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setCategoryFilter("Funny")}>
                Funny
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setCategoryFilter("None")}>
                None
              </Dropdown.Item>
            </Dropdown.Menu>
            <h1>Selected: {categoryFilter}</h1>
          </Dropdown>
        </Col>
      </SeptemberRow>
      <Row>
        {videoContent.map((value) => {
          return <Videoblock key={value.id} videoStuff={value}></Videoblock>;
        })}
      </Row>
    </Layout>
  );
};
export default App;
