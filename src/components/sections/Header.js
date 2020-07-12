import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import { Section, mixins, LogoTitleWrapper } from '../../styles';
import { LogoTitle, Vc } from '../svgs';
import { DarkModeToggle } from '../DarkModeToggle';
import { useSelector, useDispatch } from 'react-redux';
import { Langs } from '../../langs';
import { changeLang } from '../../actions';
const HeaderWrapper = styled(Section)`
  background-color: ${(props) => (props.dark ? '#29272A' : '#f7f7f7')};
  height: 100vh;
  @media (min-width: 769px) {
    ::after {
      content: '';
      position: absolute;
      width: 68%;
      height: 100vh;
      top: 0;
      right: 0;
      background-color: ${(props) => (props.dark ? '#29272A' : '#7bd1ba')};
    }
  }
  .header {
    max-width: 1440px;
    margin: 0 auto;
    ${mixins.flexBetween};
    .toggles {
      @media (max-width: 767px) {
        margin-left: 2rem;
      }
      ${mixins.flexBetween};
      width: 8rem;
      z-index: 100;
      .langs {
        select {
          background-color: transparent;
          -webkit-appearance: none;
          font-size: 0.8rem;
          border: none;
          color: white;
          @media (max-width: 768px) {
            color: #404040;
          }
          option {
            color: black;
            background: white;
          }
        }
        .arrow {
          position: absolute;
          right: 0.4rem;
          top: 65%;
          margin-top: -0.4rem;
          font-size: 0.4rem;
        }
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
        color: ${(props) => (props.dark ? 'white' : '#404040')};
        font-size: 1.5rem;
      }
      margin-top: -10rem;
      z-index: 100;
      margin-left: 5rem;
      font-family: 'Poppins', 'Microsoft YaHei', sans-serif;
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
  const { darkMode, locale, lang } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(locale);

  useEffect(() => {
    dispatch(changeLang(language));
  }, [dispatch, language]);

  return (
    <HeaderWrapper dark={darkMode}>
      <div className="header">
        <LogoTitleWrapper>
          <LogoTitle />
        </LogoTitleWrapper>
        <div className="toggles">
          <div className="langs">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              {Object.keys(Langs).map((l) => (
                <option key={l} value={l}>
                  {Langs[l].title}
                </option>
              ))}
            </select>
            <div className="arrow" />
          </div>
          <DarkModeToggle />
        </div>
      </div>
      <div className="hero">
        <div className="vc">
          <Vc />
        </div>
        <div className="intro">
          <p>{lang.header.greetings[0]}</p>
          <p>{lang.header.greetings[1]}</p>
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
