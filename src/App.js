import React from 'react';
import { Header } from './components/sections/Header';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
