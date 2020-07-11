import React from 'react';
import styled from 'styled-components';
import { Section, ProjectWrapper } from '../../styles';
import { GitHub, External } from '../svgs';
import { useSelector } from 'react-redux';
const ProjectsWrapper = styled(Section)`
  background-color: ${(props) => (props.dark ? '#2C2A32' : '#fbf8b4')};
  .content {
    display: flex;
    flex-flow: column;
    max-width: 1440px;
    margin: 0 auto;
    .title {
      margin-top: 5rem;
      margin-bottom: 2rem;
      font-family: 'Poppins', sans-serif;
      color: ${(props) => (props.dark ? 'white' : '#404040')};
      font-weight: 700;
      font-size: 4rem;
    }
  }
`;

export const Projects = () => {
  const { darkMode } = useSelector((state) => state);
  return (
    <ProjectsWrapper dark={darkMode}>
      <div className="content">
        <div className="title">Some Projects.</div>
        <ProjectWrapper dark={darkMode}>
          <div className="project-content">
            <h5 className="project-name">
              <a href="/">Merch Shop</a>
            </h5>
            <div className="project-description">
              <p>
                An E-Commerce web application built with MERN Stack and equipped with features such
                as API calling, form submission, login/register, PayPal sandbox, and other features,
                which completes and simulates a whole process of online shopping and product
                ordering experience.
              </p>
            </div>
            <ul className="project-tech">
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Node.js</li>
            </ul>
            <div className="project-links">
              <a
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label="GitHub Link"
              >
                <GitHub />
              </a>
              <a
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label="External Link"
              >
                <External />
              </a>
            </div>
          </div>
          <a className="project-image" href="/">
            <img src="/images/merch-shop.png" alt="merch-shop" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper dark={darkMode}>
          <div className="project-content">
            <h5 className="project-name">
              <a href="/">Merch Shop</a>
            </h5>
            <div className="project-description">
              <p>
                An E-Commerce web application built with MERN Stack and equipped with features such
                as API calling, form submission, login/register, PayPal sandbox, and other features,
                which completes and simulates a whole process of online shopping and product
                ordering experience.
              </p>
            </div>
            <ul className="project-tech">
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Node.js</li>
            </ul>
            <div className="project-links">
              <a
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label="GitHub Link"
              >
                <GitHub />
              </a>
              <a
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label="External Link"
              >
                <External />
              </a>
            </div>
          </div>
          <a className="project-image" href="/">
            <img src="/images/merch-shop.png" alt="merch-shop" />
          </a>
        </ProjectWrapper>
      </div>
    </ProjectsWrapper>
  );
};
