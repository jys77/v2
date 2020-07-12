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
      font-family: 'Poppins', 'Microsoft YaHei', sans-serif;
      font-weight: 700;
      font-size: 3.5rem;
    }
    .aboutMe {
      display: flex;
      justify-content: center;
      @media (max-width: 767px) {
        flex-flow: column;
      }
      .paragraph {
        font-family: sans-serif, 'Microsoft YaHei';
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
  const { darkMode, lang } = useSelector((state) => state);
  return (
    <AboutMeWrapper dark={darkMode}>
      <div className="content">
        <div className="title">{lang.aboutMe.title}</div>
        <div className="aboutMe">
          <div className="paragraph">
            <p>{lang.aboutMe.content[0]}</p>
            <br></br>
            <p>{lang.aboutMe.content[1]}</p>
            <br></br>
            <ul>
              {lang.aboutMe.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
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
