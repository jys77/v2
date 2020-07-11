import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../actions';
import { Sun, Moon } from './svgs';
const Wrapper = styled.div`
  cursor: pointer;
`;

export const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state);
  return (
    <Wrapper onClick={() => dispatch(toggleDarkMode())}>{!darkMode ? <Sun /> : <Moon />}</Wrapper>
  );
};
