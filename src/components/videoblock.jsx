import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const VideoContainer = styled.div`
  border-top: 1px solid black;
  margin: 2rem 0;
  transition: 0.5s;
  padding: 2rem 2rem 3rem 2rem;
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
    line-height: 1.5rem;
  }
  a {
    border: 1px solid black;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    color: black;
    transition: 0.3s;
    text-decoration: none;
  }
  a:hover {
    color: rgba(242, 38, 19, 1);
    background-color: white;
    border: 1px solid white;
  }
  :hover {
    border-top: 1px solid red;
    color: white;
    border-radius: 10px;
    background-color: rgba(242, 38, 19, 1);
    transform: scale(1.05) translateY(-10px);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.7);
    a {
      background-color: white;
      border: 1px solid white;
      color: rgba(242, 38, 19, 1);
    }
    a:hover {
      color: white;
      background-color: rgba(242, 38, 19, 0);
      border: 1px solid white;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 2rem 3rem 2rem;
  }
`;

const VideoThumbnail = styled(Image)`
  border-radius: 5px;
`;

const Videoblock = (props) => {
  return (
    <React.Fragment>
      <Col sm={4}>
        <VideoContainer>
          <h4>{props.videoStuff.category}</h4>
          <VideoThumbnail src={props.videoStuff.img} fluid />
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
