import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Section, mixins, LogoTitleWrapper } from '../../styles';
import { LogoTitle } from '../icons';
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
      background: #7bd1ba;
      z-index: 0;
    }
  }
  .header {
    max-width: 1440px;
    margin: 0 auto;
    ${mixins.flexBetween};
    .toggles {
      ${mixins.flexBetween};
      width: 8rem;
      z-index: 1;
      .langs {
      }
      .day-night {
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
    </HeaderWrapper>
  );
};
