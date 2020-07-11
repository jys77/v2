import React from 'react';
import styled from 'styled-components';
import { Section, BikeBoyWrapper } from '../../styles';
import { useSelector } from 'react-redux';
import { BikeBoy } from '../svgs';
const AboutMeWrapper = styled(Section)`
  background-color: ${(props) => (props.dark ? '#4C3A69' : '#ae8fdb')};
  .content {
    display: flex;
    flex-flow: column;
    max-width: 1440px;
    margin: 0 auto;
    color: ${(props) => (props.dark ? 'white' : '#404040')};
    .title {
      margin-top: 5rem;
      margin-bottom: 2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 4rem;
    }
    .aboutMe {
      display: flex;
      justify-content: center;
      @media (max-width: 767px) {
        flex-flow: column;
      }
      .paragraph {
        font-size: 1.5rem;
        font-weight: 500;
        width: 50%;
        line-height: 1.5;
        ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(160px, 220px));
          overflow: hidden;
          list-style: none;
          font-weight: 500;
          li {
            margin-bottom: 10px;
            font-size: 1.1rem;
            ::before {
              content: '▹';
              margin-right: 0.3rem;
              color: #404040;
              font-size: 1.2rem;
            }
          }
        }
        @media (max-width: 767px) {
          width: 100%;
        }
      }
    }
  }
`;

export const AboutMe = () => {
  const { darkMode } = useSelector((state) => state);
  return (
    <AboutMeWrapper dark={darkMode}>
      <div className="content">
        <div className="title">About Me.</div>
        <div className="aboutMe">
          <div className="paragraph">
            <p>
              Hello! I'm Yunsheng Jiang, an enthusiastic web developer and fast learner. I recently
              graduated from the University of Ottawa with a master's degree in Electrical and
              Computer Engineering. I love hunting and learning new stuff from the Internet and
              trying out different techs.
            </p>
            <br></br>
            <p>Here are a few technologies I've been working with recently:</p>
            <br></br>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Vue</li>
              <li>MERN Stack</li>
              <li>HTML / (S)CSS</li>
            </ul>
          </div>
          <BikeBoyWrapper>
            <BikeBoy />
          </BikeBoyWrapper>
        </div>
      </div>
    </AboutMeWrapper>
  );
};
