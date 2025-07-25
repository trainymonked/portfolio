import { Card } from './Card'

const initialCards: Card[] = [
  {
    id: 1,
    title: 'Reviews',
    description:
      'Reviews is a kind of IMDB clone that I created as a task. Responsive',
    image: '/img/projects/reviews.png',
    tag: 'Social',
    tools: [
      'TypeScript',
      'Next.js',
      'React',
      'Material UI',
      'Supabase',
      'PostgreSQL',
    ],
    demo: 'https://reviews.teacode.dev',
  },
  {
    id: 2,
    title: 'MusicBox',
    description:
      'MusicBox is a Spotify-like web app that allows you to host your own music and listen to it online. Responsive',
    image: '/img/projects/music-next.png',
    tag: 'Services',
    tools: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Stripe API',
    ],
    demo: 'https://musicbox.teacode.dev',
  },
  {
    id: 3,
    title: 'TG2VK Reposter',
    description:
      "Node.js application that helps you to auto-repost your Telegram channel posts to your VK group's wall",
    image: '/img/projects/tg2vk-reposter.png',
    tag: 'Utilities',
    tools: ['Node.js', 'Express', 'MongoDB', 'Telegram Bot API', 'VK API'],
    // demo: 'https://t.me/tg2vk_repost',
  },
  {
    id: 4,
    title: 'Whats API',
    description:
      'Single-page online chatting application with multiple WhatsApp users using 3rd party API',
    image: '/img/projects/whats-api.png',
    tag: 'Social',
    tools: ['React', 'Green API'],
    demo: 'https://trainymonked.github.io/whats-api',
  },
  {
    id: 5,
    title: 'skyenot portfolio',
    description: 'Simple yet elegant portfolio website',
    image: '/img/projects/skyenot-portfolio.png',
    tag: 'Portfolio',
    tools: ['HTML', 'CSS', 'JavaScript'],
    // demo: 'https://skyenot.github.io',
  },
  {
    id: 6,
    title: 'Careers',
    description: 'Careers tab for a company website with admin panel',
    image: '',
    tag: '',
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'TinyMCE'],
    demo: '',
    hidden: true,
  },
  {
    id: 7,
    title: 'Fancy Todo',
    description: 'My everyday use website. Schedule todo app. Responsive',
    image: '/img/projects/fancy-todo.png',
    tag: 'Services',
    tools: ['React', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://trainymonked.github.io/todo',
  },
  {
    id: 8,
    title: 'ChatBot',
    description:
      'Telegram bot which uses OpenAI API to talk to ChatGPT/DeepSeek',
    image: '/img/projects/chatbot.png',
    tag: 'Utilities',
    tools: ['Node.js', 'Express', 'OpenAI API', 'Telegram Bot API'],
    // demo: 'https://t.me/UsernameIsNotTaken_Bot',
  },
  {
    id: 9,
    title: 'This portfolio',
    description: "The website you're currently on",
    image: '/img/projects/this-portfolio.png',
    tag: 'Portfolio',
    tools: ['TypeScript', 'React', 'Tailwind CSS'],
    demo: 'https://trainymonked.github.io/portfolio',
  },
  {
    id: 10,
    title: 'HTML Resume (+ .pdf)',
    description:
      'Interactive resume website with the option to download a PDF file',
    image: '/img/projects/resume.png',
    tag: 'Portfolio',
    tools: ['HTML', 'CSS'],
    // demo: 'https://trainymonked.github.io/resume',
  },
  {
    id: 11,
    title: 'Figures',
    description:
      'Figures is a game where you need to match the shapes. Responsive',
    image: '/img/projects/figures.png',
    tag: 'Games',
    tools: ['PixiJS', 'JavaScript', 'HTML', 'CSS'],
    demo: 'https://trainymonked.github.io/pixi-figures',
  },
  {
    id: 12,
    title: 'Tetris',
    description: 'Tetris mini game using plain JavaScript. Desktop-only',
    image: '/img/projects/tetris.jpg',
    tag: 'Games',
    tools: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://trainymonked.github.io/tetris',
  },
  {
    id: 13,
    title: 'KinoPulse',
    description: 'Simple landing page as a task. Responsive',
    image: '/img/projects/kinopulse.jpg',
    tag: 'Landings',
    tools: ['HTML', 'CSS', 'Animate.css', 'jQuery', 'Fancybox'],
    demo: 'https://trainymonked.github.io/batman',
  },
  {
    id: 14,
    title: 'Yoga Tours',
    description:
      'Yoga Tours is a large landing page that I created from mocks for portfolio. Responsive',
    image: '/img/projects/yoga-tours.jpg',
    tag: 'Landings',
    tools: ['HTML', 'CSS', 'JavaScript', 'Slick'],
    demo: 'https://trainymonked.github.io/yoga-india',
  },
  {
    id: 15,
    title: 'Multiplayer Gaming Platform',
    description:
      'The platform where players can engage in simple multiplayer games',
    image: '',
    tag: 'Games',
    tools: ['React', 'Material UI', 'Node.js', 'WebSocket', 'PostgreSQL'],
    demo: '',
    hidden: true,
  },
  {
    id: 16,
    title: 'Email-like Messenger',
    description:
      'The platform where users can send messages in real-time to other users using nicknames',
    image: '',
    tag: 'Social',
    tools: ['React', 'Material UI', 'Node.js', 'WebSocket', 'PostgreSQL'],
    demo: '',
    hidden: true,
  },
  {
    id: 17,
    title: 'Spotify Clone',
    description: "Spotify web app's clone",
    image: '',
    tag: 'Services',
    tools: ['React', 'Material UI', 'Spotify Web API'],
    demo: '',
    hidden: true,
  },
  {
    id: 18,
    title: 'trainymonked portfolio',
    description: 'My old portfolio',
    image: '/img/projects/trainymonked-portfolio.png',
    tag: 'Portfolio',
    tools: ['HTML', 'CSS', 'JavaScript'],
    // demo: 'https://trainymonked.github.io',
    hidden: true,
  },
  {
    id: 19,
    title: 'VK Mutual',
    description: 'Mutual friends search web app',
    image: '/img/projects/vk-mutual.png',
    tag: 'Social',
    tools: ['Vue.js', 'Tailwind CSS', 'Pinia', 'VK API', 'lodash'],
    // demo: 'https://trainymonked.github.io/vk-vue',
  },
  {
    id: 20,
    title: 'Cabzy',
    description:
      'An Expo-based mobile app that aggregates taxi services, letting users compare prices and book rides effortlessly',
    image: '/img/projects/cabzy.png',
    tag: 'Services',
    tools: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Google Maps API',
      'Stripe API',
    ],
    demo: '',
  },
  {
    id: 21,
    title: 'Runaway Button',
    description: 'A fun little game where a button tries to escape your mouse',
    image: '/img/projects/runaway-button.png',
    tag: 'Games',
    tools: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://trainymonked.github.io/runaway-button',
  },
  {
    id: 22,
    title: 'Mafia Game',
    description: 'Browser-based Mafia with live video and classic rules',
    image: '/img/projects/mafia.png',
    tag: 'Games',
    tools: ['React', 'WebSocket', 'WebRTC', 'Node.js', 'Express', 'PostgreSQL'],
    demo: 'https://mafia.teacode.dev',
  },
]

/*

{ id: , title: '', description: '', image: '', tag: '', tools: [], demo: '', },

*/

export default initialCards
