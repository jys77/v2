import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Section, mixins, LogoTitleWrapper } from '../../styles';
import { LogoTitle, Vc } from '../icons';
const HeaderWrapper = styled(Section)`
  background-color: #f7f7f7;
  @media (min-width: 768px) {
    ::after {
      content: '';
      position: absolute;
      width: 68%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
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
    ${mixins.flexEvenly}
    .vc {
      width: 40%;
      position: relative;
      top: -5rem;
      bottom: 0;
      display: flex;
      z-index: 100;
      @media (max-width: 767px) {
        display: none;
      }
    }
    .intro {
      position: relative;
      z-index: 100;
      margin-left: 10rem;
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
          <p>My Intro</p>
        </div>
      </div>
    </HeaderWrapper>
  );
};
