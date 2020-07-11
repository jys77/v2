import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-gap: 10px;
  margin-bottom: 5rem;
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / 2;
    @media (max-width: 767px) {
      grid-column: 1 / 13;
      grid-row: 1 / 2;
      z-index: 5;
    }
    .project-name {
      margin: 1rem 0rem 1rem;
      a {
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: #404040;
        &:hover {
          background-image: linear-gradient(
            transparent 50%,
            #72cada 50%,
            #72cada 85%,
            transparent 85%,
            transparent 100%
          );
          background-size: 100% 100%;
        }
      }
    }
    .project-description {
      position: relative;
      z-index: 2;
      background-color: #fff;
      color: #404040;
      border: 2px solid #404040;
      border-radius: 10px;
      padding: 1rem;
      line-height: 1.5;
      @media (max-width: 767px) {
        padding: 1.5rem 0;
        padding: 0.5rem;
      }
      p {
        margin: 0;
      }
    }
    .project-tech {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 25px 0 10px;
      list-style: none;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: #404040;
      li {
        margin-right: 10px;
        margin-bottom: 5px;
        white-space: nowrap;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 10px;
      margin-left: -10px;
      color: #404040;
      a {
        padding: 10px;
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    border: 2px solid #404040;
    box-shadow: 0.5rem 0.5rem 0 0 #404040;
    transition: all 0.2s ease-in-out;
    &:active {
      transform: translate(0.5rem, 0.5rem);
      box-shadow: 0 0 0 0 #404040;
    }
    overflow: hidden;
    @media (max-width: 767px) {
      grid-column: 1 / -1;
      opacity: 0.25;
    }
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: middle;
      position: relative;
    }
  }
  &:nth-of-type(even) {
    .project-name {
      text-align: right;
    }
    .project-content {
      grid-column: 7 / -1;
      @media (max-width: 767px) {
        grid-column: 1 / 13;
        grid-row: 1 / 2;
        z-index: 5;
      }
    }
    .project-tech {
      justify-content: flex-end;
      li {
        margin-left: 10px;
        margin-right: 0;
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 767px) {
        grid-column: 1 / -1;
        opacity: 0.25;
      }
    }
  }
`;
