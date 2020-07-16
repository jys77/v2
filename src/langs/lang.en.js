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
        image: '/images/trivia-quizzer.png',
        desc:
          'A quiz application built with React and using Open Trivia Database API.It supports the selection of a wide variety of topics and numbers of questions. The quiz has highlighting prompts and the display of progress bar, and it has options for returning and answering again.',
        tech: ['React', 'Styled Components', 'Netlify'],
        external: 'https://trivia-quizzer.netlify.app/',
        github: 'https://github.com/jys77/trivia-quizzer',
      },
      {
        title: 'Memory Match',
        image: '/images/memory-match.png',
        desc:
          'A memory game to match front-end tech logos. It supports Chinese and English switching. The game shares three levels of difficulty, each of which randomly extracts different logos from the data file and random positions. It supports statistics to record the best time for each difficulty.',
        tech: ['React', 'Redux', 'Webpack', 'Netlify'],
        external: 'https://play-memory-match.netlify.app/',
        github: 'https://github.com/jys77/memory-match',
      },
      {
        title: 'Todo App',
        image: '/images/todo.png',
        desc:
          'A todoist clone built with React (Context, Custom Hooks) and firebase. It supports adding to-do items, adding item categories, checking completion and deletion, adding items to specific items, setting execution time for items, and quickly adding to-do items in the application header.',
        tech: ['React', 'Custom Hooks', 'firebase'],
        github: 'https://github.com/jys77/todo-app',
      },
      {
        title: 'UniHelp',
        image: '/images/unihelp.png',
        desc:
          'A business concept project of GNG5120 course of the University of Ottawa. UniHelp is a platform that provides a one-stop-shop service on university applications, 1-one-1 guidance, useful learning resources and other stuff for students.',
        tech: ['Vue', 'Vuex', 'Google Authentication'],
        external: 'http://unihelp.club/',
        github: 'https://github.com/jys77/UniHelp',
      },
      {
        title: 'Vue CMS Mobile',
        image: '/images/cms.png',
        desc:
          'A Vue mobile single-page application built as a content management system. including article browsing, picture collection (including categories and picture viewers), built-in shop (including shopping cart, quantity addition and deletion, price calculation, etc.).',
        tech: ['Vue', 'Vuex', 'Webpack', 'Custom API'],
        external: 'http://unihelp.club:801/',
        github: 'https://github.com/jys77/vue-cms-mobile',
      },
    ],
    button: 'Visit My GitHub',
  },
  contact: {
    title: 'Get In Touch.',
    button: 'Say Hello',
  },
};
