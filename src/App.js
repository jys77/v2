import React from 'react';
import { GlobalStyle } from './styles';
import { Header } from './components/sections/Header';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { useSelector } from 'react-redux';

function App() {
  const { darkMode } = useSelector((state) => state);
  return (
    <div>
      <GlobalStyle dark={darkMode} />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
