import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import { Section, mixins, LogoTitleWrapper } from '../../styles';
import { LogoTitle, Vc } from '../svgs';
const HeaderWrapper = styled(Section)`
  background-color: #f7f7f7;
  height: 100vh;
  @media (min-width: 769px) {
    ::after {
      content: '';
      position: absolute;
      width: 68%;
      height: 100vh;
      top: 0;
      right: 0;
      background-color: #7bd1ba;
    }
  }
  .header {
    max-width: 1440px;
    margin: 0 auto;
    ${mixins.flexBetween};
    .toggles {
      ${mixins.flexBetween};
      width: 8rem;
      z-index: 100;
      .langs {
      }
      .day-night {
      }
    }
  }
  .hero {
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    .vc {
      width: 40%;
      position: relative;
      top: -5rem;
      bottom: 0;
      display: flex;
      z-index: 100;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .intro {
      @media (max-width: 768px) {
        margin-left: 0;
        color: #000;
        font-size: 1.5rem;
      }
      margin-top: -10rem;
      z-index: 100;
      margin-left: 5rem;
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.5;
      p:nth-child(1) {
        font-size: 5rem;
        @media (max-width: 767px) {
          font-size: 3rem;
        }
      }
      .typical {
        display: flex;
        p {
          font-size: 2rem;
          @media (max-width: 767px) {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export const Header = () => {
  useEffect(() => {
    const logo = document.querySelectorAll('#logo path');
    for (let i = 0; i < logo.length; i++) {
      console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
  }, []);
  return (
    <HeaderWrapper>
      <div className="header">
        <LogoTitleWrapper>
          <LogoTitle />
        </LogoTitleWrapper>
        <div className="toggles">
          <div className="langs">Lang</div>
          <div className="day-night">Dark mode</div>
        </div>
      </div>
      <div className="hero">
        <div className="vc">
          <Vc />
        </div>
        <div className="intro">
          <p>Hi!</p>
          <p>Welcome to my Homepage.</p>
          <div className="typical">
            <p>I'm a&#160;</p>
            <Typical
              steps={['Web Developer.', 1000, 'UX Designer.', 1000, 'Fast Learner.', 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
