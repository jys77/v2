import styled, { keyframes } from 'styled-components';

const wheel = keyframes`
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
`;

const bike = keyframes`
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(20deg);
    }
`;

const hat = keyframes`
    from {
        transform: translateY(0%) rotateZ(0deg);
    }
    to {
        transform: translateY(43%) rotateZ(10deg);
    }
`;

export const BikeBoyWrapper = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 767px) {
    margin-top: -10rem;
    margin-bottom: -10rem;
    width: 100%;
  }
  #right-wheel,
  #left-wheel {
    animation: ${wheel} 1s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
  #man-on-bike {
    animation: ${bike} 1s ease-in-out infinite alternate;
    transform-origin: bottom;
  }
  #hat {
    animation: ${hat} 1s ease-in-out infinite alternate;
    transform-origin: center;
    transform-box: fill-box;
  }
`;
