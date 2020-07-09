import { css } from 'styled-components';

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexEvenly: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  `,
};
