import React, { useEffect } from 'react';
import { init } from 'ityped';

export const TypingZH = () => {
  useEffect(() => {
    const zh = document.querySelector('#typing-zh');
    init(zh, {
      showCursor: false,
      strings: ['前端开发全家桶。', '关注用户体验。', '快速上手新技能。'],
    });
  }, []);
  return <p id="typing-zh" />;
};
