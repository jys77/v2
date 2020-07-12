export default {
  header: {
    title: '<p>嗨!</p><p>欢迎来到我的主页。</p>',
  },
  aboutMe: {
    title: '关于我。',
    content:
      '<p> 你好! 我是一名拥有快速学习能力的前端开发狂热者。 我刚刚从渥太华大学毕业，获得了电子和计算机工程硕士学位。 我喜欢从互联网上尝试和学习新东西，并热爱体验各种技术。</p> <br></br> <p>这是我最近一段时间使用的技能：</p> <br></br> <ul> <li>React</li> <li>JavaScript</li> <li>Node.js</li> <li>Vue</li> <li>MERN Stack</li> <li>HTML / (S)CSS</li> </ul>',
  },
  projects: {
    title: '一些项目。',
    projectList: [
      {
        title: 'Merch Shop',
        image: '/images/merch-shop.png',
        desc:
          '一个使用MERN Stack构建的电子商务Web应用程序，它具有API调用，表单提交，登录/注册，PayPal沙箱和其他功能，这些功能可以完成并模拟整个在线购物和产品订购体验的过程。',
        tech: ['React', 'Express', 'MongoDB', 'Heroku'],
        external: 'https://react-merch-shop.herokuapp.com/',
        github: 'https://github.com/jys77/merch-shop',
      },
      {
        title: 'Trivia Quizzer',
        image: '/images//trivial-quizzer.png',
        desc: '使用React构建并使用Open Trivia数据库API的测验应用程序。',
        tech: ['React', 'Styled Components', 'Netlify'],
        external: 'https://trivia-quizzer.netlify.app/',
        github: 'https://github.com/jys77/trivia-quizzer',
      },
      {
        title: 'Memory Match',
        image: '/images//memory-match.png',
        desc: '一个与前端技术徽标相匹配的记忆游戏。',
        tech: ['React', 'Redux', 'Webpack', 'Netlify'],
        external: 'https://play-memory-match.netlify.app/',
        github: 'https://github.com/jys77/memory-match',
      },
    ],
  },
};
