import chalk from 'chalk';

const { bold, cyan, gray, green, white } = chalk;

const data = {
  name: bold.green('        Denis Globa'),
  email: bold.green('xrmqd@icloud.com'),
  handle: cyan('@xrmqd'),

  // Links
  telegram: gray('https://t.me/') + green('xrm4d'),
  github: gray('https://github.com/') + green('xrmqd'),

  // labelWork: '',
  // labelBlog: '',

  labelTelegram: white.bold('    Telegram:'),
  labelGitHub: white.bold('     GitHub:'),

  firstPharse: `A ${bold.green(
    'passionate'
  )} 17 years old student, learning all the time.`,
  secondPharse: `I love working with ${cyan('Rust')} and ${cyan(
    'Python'
  )}.`,

  farewell: bold.blue(' See you later!'),
  borderColor: 'green',
  borderStyle: 'single',
};

export default data;
