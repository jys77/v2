import React from 'react';
import styled from 'styled-components';
import { Section, mixins } from '../../styles';
import { useSelector } from 'react-redux';

const Wrapper = styled(Section)`
  background-color: ${(props) => (props.dark ? '#774069' : '#6fdcbf')};
  position: fixed;
  z-index: -1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  .card {
    padding: 1rem;
    ${mixins.flexCenter}
    flex-flow: column;
    background-color: ${(props) => (props.dark ? '#262528' : '#f7f7f7')};
    margin: 0 auto;
    margin-top: 10rem;
    height: 50%;
    width: 60%;
    @media (max-width: 767px) {
      height: 60%;
      width: 90%;
    }
    .title {
      font-family: 'Poppins', 'Microsoft YaHei', sans-serif;
      font-size: 3.5rem;
      color: ${(props) => (props.dark ? 'white' : '#404040')};
      font-weight: 700;
      @media (max-width: 767px) {
        font-size: 2rem;
      }
    }
    .contact {
      text-decoration: none;
      text-align: center;
      line-height: 5rem;
      margin-top: 4rem;
      height: 5rem;
      width: 15rem;
      color: #404040;
      font-size: 2rem;
      font-family: 'Poppins', 'Microsoft YaHei', sans-serif;
      font-weight: 700;
      border: 2px solid #404040;
      box-shadow: 0.5rem 0.5rem 0 0 #404040;
      transition: all 0.2s ease-in-out;
      background-color: #f7f7f7;
      &:active {
        transform: translate(0.5rem, 0.5rem);
        box-shadow: 0 0 0 0 ${(props) => (props.dark ? 'white' : '#404040')};
      }
    }
  }
`;

export const Contact = () => {
  const { darkMode, lang } = useSelector((state) => state);
  return (
    <Wrapper dark={darkMode}>
      <div className="card">
        <div className="title">{lang.contact.title}</div>
        <a className="contact" href="mailto:jiang-yunsheng@hotmail.com">
          {lang.contact.button}
        </a>
      </div>
    </Wrapper>
  );
};
