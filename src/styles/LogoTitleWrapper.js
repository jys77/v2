import styled, { keyframes } from 'styled-components';

const lineAnime = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const fill = keyframes`
    from {
        fill: transparent;
    }
    to {
        fill: #7bd1ba;
    }
`;

export const LogoTitleWrapper = styled.div`
  width: 15rem;
  svg {
    width: 100%;
    animation: ${fill} 0.5s ease forwards 3.5s;
    path:first-child {
      stroke-dasharray: 261.75836181640625;
      stroke-dashoffset: 261.75836181640625;
      animation: ${lineAnime} 2s ease forwards;
    }
    path:nth-child(2) {
      stroke-dasharray: 287.8096923828125;
      stroke-dashoffset: 287.8096923828125;
      animation: ${lineAnime} 2s ease forwards 0.3s;
    }
    path:nth-child(3) {
      stroke-dasharray: 287.3680725097656;
      stroke-dashoffset: 287.3680725097656;
      animation: ${lineAnime} 2s ease forwards 0.6s;
    }
    path:nth-child(4) {
      stroke-dasharray: 278.3129577636719;
      stroke-dashoffset: 278.3129577636719;
      animation: ${lineAnime} 2s ease forwards 0.9s;
    }
    path:nth-child(5) {
      stroke-dasharray: 322.5028381347656;
      stroke-dashoffset: 322.5028381347656;
      animation: ${lineAnime} 2s ease forwards 1.2s;
    }
    path:nth-child(6) {
      stroke-dasharray: 300.9994201660156;
      stroke-dashoffset: 300.9994201660156;
      animation: ${lineAnime} 2s ease forwards 1.5s;
    }
    path:nth-child(7) {
      stroke-dasharray: 287.36822509765625;
      stroke-dashoffset: 287.36822509765625;
      animation: ${lineAnime} 2s ease forwards 1.8s;
    }
    path:nth-child(8) {
      stroke-dasharray: 414.2274169921875;
      stroke-dashoffset: 414.2274169921875;
      animation: ${lineAnime} 2s ease forwards 2.1s;
    }
  }
`;
