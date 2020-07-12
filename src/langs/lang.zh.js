export default {
  header: {
    greetings: ['嗨!', '欢迎来到我的主页。'],
  },
  aboutMe: {
    title: '关于我。',
    content: [
      '你好吖！我叫蒋昀声。近期从渥太华大学毕业，并获得了电子与计算机工程硕士学位。我热爱前端开发，喜欢有设计感的交互界面。我常常从互联网上学习和汲取新知识。不折腾会死星人。',
      '这是我最近一段时间使用的技能：',
    ],
    skills: ['▸ React', '▸ JavaScript', '▸ Node.js', '▸ Vue', '▸ MERN Stack', '▸ HTML / (S)CSS'],
  },
  projects: {
    title: '一些项目。',
    projectList: [
      {
        title: '小小周边商店',
        image: '/images/merch-shop.png',
        desc:
          '一个使用MERN技术栈构建的电子商务Web应用程序，它具有API调用，表单提交，登录/注册，PayPal沙箱测试等功能，从普通浏览到登录下单，浏览历史订单，随时PayPal支付，完成并模拟整个在线购物和产品订购体验的过程。',
        tech: ['React', 'Express', 'MongoDB', 'Heroku'],
        external: 'https://react-merch-shop.herokuapp.com/',
        github: 'https://github.com/jys77/merch-shop',
      },
      {
        title: '无聊问题答答乐',
        image: '/images/trivia-quizzer.png',
        desc:
          '使用React构建并接入Open Trivia数据库API的答题程序并部署在Netlify上。支持选择种类繁多的题目类型和题目数量。答题过程具有完善的高亮提示以及答题进度条的显示，结束页面具有返回和重新作答选项。',
        tech: ['React', 'Styled Components', 'Netlify'],
        external: 'https://trivia-quizzer.netlify.app/',
        github: 'https://github.com/jys77/trivia-quizzer',
      },
      {
        title: '记忆连连看',
        image: '/images/memory-match.png',
        desc:
          '一个记忆翻牌匹配游戏。匹配的对象是众多的前端技术图标。支持中英文切换。游戏共用三种难度，每种难度都随机从数据库中抽取不同的图标和随机位置。支持统计功能，记录每种难度的最佳时间。',
        tech: ['React', 'Redux', 'Webpack', 'Netlify'],
        external: 'https://play-memory-match.netlify.app/',
        github: 'https://github.com/jys77/memory-match',
      },
    ],
  },
  contact: {
    title: '欢迎来聊!',
    button: 'Say Hello',
  },
};
