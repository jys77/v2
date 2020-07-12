export default {
  header: {
    title: '<p>Hi!</p><p>Welcome to my Homepage.</p>',
  },
  aboutMe: {
    title: 'About Me.',
    content:
      "<p> Hello! I'm Yunsheng Jiang, an enthusiastic web developer and fast learner. I recently graduated from the University of Ottawa with a master's degree in Electrical and Computer Engineering. I love hunting and learning new stuff from the Internet and trying out different techs. </p> <br></br> <p>Here are a few technologies I've been working with recently:</p> <br></br> <ul> <li>React</li> <li>JavaScript</li> <li>Node.js</li> <li>Vue</li> <li>MERN Stack</li> <li>HTML / (S)CSS</li> </ul>",
  },
  projects: {
    title: 'Some Projects.',
    projectList: [
      {
        title: 'Merch Shop',
        image: '/images/merch-shop.png',
        desc:
          'An E-Commerce web application built with MERN Stack and equipped with features such as API calling, form submission, login/register, PayPal sandbox, and other features, which completes and simulates a whole process of online shopping and product ordering experience.',
        tech: ['React', 'Express', 'MongoDB', 'Heroku'],
        external: 'https://react-merch-shop.herokuapp.com/',
        github: 'https://github.com/jys77/merch-shop',
      },
      {
        title: 'Trivia Quizzer',
        image: '/images//trivial-quizzer.png',
        desc: 'A quiz application built with React and using Open Trivia Database API.',
        tech: ['React', 'Styled Components', 'Netlify'],
        external: 'https://trivia-quizzer.netlify.app/',
        github: 'https://github.com/jys77/trivia-quizzer',
      },
      {
        title: 'Memory Match',
        image: '/images//memory-match.png',
        desc: 'A memory game to match front-end tech logos.',
        tech: ['React', 'Redux', 'Webpack', 'Netlify'],
        external: 'https://play-memory-match.netlify.app/',
        github: 'https://github.com/jys77/memory-match',
      },
    ],
  },
};
