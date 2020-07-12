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
    margin-bottom: 100vh;
    .title {
      margin-top: 5rem;
      margin-bottom: 2rem;
      font-family: 'Poppins', 'Microsoft YaHei', sans-serif;
      color: ${(props) => (props.dark ? 'white' : '#404040')};
      font-weight: 700;
      font-size: 3.5rem;
    }
  }
`;

export const Projects = () => {
  const { darkMode, lang } = useSelector((state) => state);
  return (
    <ProjectsWrapper dark={darkMode}>
      <div className="content">
        <div className="title">{lang.projects.title}</div>
        {lang.projects.projectList.map((project, idx) => (
          <ProjectWrapper key={idx} dark={darkMode}>
            <div className="project-content">
              <h5 className="project-name">
                <a
                  href={project.external ? project.external : project.github ? project.github : '/'}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {project.title}
                </a>
              </h5>
              <div className="project-description">
                <p>{project.desc}</p>
              </div>
              <ul className="project-tech">
                {project.tech.map((t, tIdx) => (
                  <li key={idx + '-' + tIdx}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  arial-label="GitHub Link"
                >
                  <GitHub />
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  arial-label="External Link"
                >
                  <External />
                </a>
              </div>
            </div>
            <a
              className="project-image"
              href={project.external ? project.external : project.github ? project.github : '/'}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
            </a>
          </ProjectWrapper>
        ))}
      </div>
    </ProjectsWrapper>
  );
};
