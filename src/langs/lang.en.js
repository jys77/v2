export default {
  header: {
    greetings: ['Hi!', 'Welcome to my Homepage.'],
  },
  aboutMe: {
    title: 'About Me.',
    content: [
      "Hello! I'm Yunsheng Jiang, an enthusiastic web developer and fast learner. I recently graduated from the University of Ottawa with a master's degree in Electrical and Computer Engineering. I love hunting and learning new stuff from the Internet and trying out different techs.",
      "Here are a few technologies I've been working with recently:",
    ],
    skills: ['▸ React', '▸ JavaScript', '▸ Node.js', '▸ Vue', '▸ MERN Stack', '▸ HTML / (S)CSS'],
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
        image: '/images//trivia-quizzer.png',
        desc:
          'A quiz application built with React and using Open Trivia Database API.It supports the selection of a wide variety of topics and numbers of questions. The quiz has highlighting prompts and the display of progress bar, and it has options for returning and answering again.',
        tech: ['React', 'Styled Components', 'Netlify'],
        external: 'https://trivia-quizzer.netlify.app/',
        github: 'https://github.com/jys77/trivia-quizzer',
      },
      {
        title: 'Memory Match',
        image: '/images//memory-match.png',
        desc:
          'A memory game to match front-end tech logos. It supports Chinese and English switching. The game shares three levels of difficulty, each of which randomly extracts different logos from the data file and random positions. It supports statistics to record the best time for each difficulty.',
        tech: ['React', 'Redux', 'Webpack', 'Netlify'],
        external: 'https://play-memory-match.netlify.app/',
        github: 'https://github.com/jys77/memory-match',
      },
    ],
  },
  contact: {
    title: 'Get In Touch.',
    button: 'Say Hello',
  },
};
