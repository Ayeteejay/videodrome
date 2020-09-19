import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const VideoContainer = styled.div`
  border-top: 1px solid black;
  margin: 2rem 0;
  h3 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    padding: 1rem 0 0 0;
  }
  h4 {
    padding: 1rem 0;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  p {
    font-size: 1rem;
    padding: 0 0 2rem 0;
  }
  a {
    border: 1px solid black;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    color: black;
    transition: 0.5s;
    text-decoration: none;
  }
  a:hover {
    color: white;
    background-color: #ff0000;
    border: 1px solid #ff0000;
  }
`;

const Videoblock = (props) => {
  return (
    <React.Fragment>
      <Col sm={4}>
        <VideoContainer>
          <h4>{props.videoStuff.category}</h4>
          <Image src={props.videoStuff.img} fluid />
          <h3>{props.videoStuff.title}</h3>
          <p>
            {props.videoStuff.description.length > 180
              ? `${props.videoStuff.description.slice(0, 180)}...`
              : props.videoStuff.description}
          </p>
          <a
            href={props.videoStuff.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Watch Now
          </a>
        </VideoContainer>
      </Col>
    </React.Fragment>
  );
};
export default Videoblock;
