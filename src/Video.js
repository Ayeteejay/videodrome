import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Layout from "./components/layout.jsx";
// import YouTube from "./images/youtube-logo.svg";
import Image from "react-bootstrap/Image";
import Videoblock from "./components/videoblock.jsx";
import SeptData from "./data/septData.jsx";
import Dropdown from "react-bootstrap/Dropdown";
import Fade from "react-reveal/Fade";

const IntroRow = styled(Row)`
  padding: 8rem 0 12rem 0;
  p {
    font-size: 3rem;
    line-height: 3.8rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  span {
    color: #ff0000;
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

const YouTubeLogo = styled(Image)`
  max-width: 150px;
`;

const VideoRow = styled.section`
  display: grid;
`;

const App = () => {
  const [videoContent, setVideoContent] = useState(SeptData);
  const [categoryFilter, setCategoryFilter] = useState("None");
  return (
    <Layout>
      <IntroRow>
        <Col sm={8}>
          <h1>Are you looking for the raddest YouTube videos?</h1>
          <p>
            Obscure Halloween specials? 80's fast food training videos?
            Claymation?
          </p>
          <p>
            We got you. We curated the gems of the interwebs for your viewing
            pleasure.
          </p>
          <p>Let's dive in.</p>
        </Col>
        <Col sm={4}></Col>
      </IntroRow>
      <hr></hr>

      <VideoRow>
        <div>
          <h1>Are you looking for the raddest YouTube videos?</h1>
          <p>
            Obscure Halloween specials? 80's fast food training videos?
            Claymation?
          </p>
          <p>
            We got you. We curated the gems of the interwebs for your viewing
            pleasure.
          </p>
          <p>Let's dive in.</p>
        </div>
        <div></div>
      </VideoRow>

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
