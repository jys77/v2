import React from 'react';
import { Header } from './components/sections/Header';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
