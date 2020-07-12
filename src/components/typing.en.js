import React, { useEffect } from 'react';
import { init } from 'ityped';

export const TypingEN = () => {
  useEffect(() => {
    const en = document.querySelector('#typing-en');
    init(en, {
      showCursor: false,
      strings: ['Web Developer.', 'UX Designer.', 'Fast Learner.'],
    });
  }, []);
  return <p id="typing-en" />;
};
