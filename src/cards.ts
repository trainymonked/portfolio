import { Card } from './Card'

const initialCards: Card[] = [
    {
        id: 1,
        title: 'Reviews',
        description: 'Reviews is a kind of IMDB clone that I created as a task. Responsive',
        image: '/img/projects/reviews.png',
        tag: 'Social',
        tools: ['TypeScript', 'Next.js', 'React', 'Material UI', 'Supabase', 'PostgreSQL'],
        demo: 'https://reviews-peach.vercel.app',
    },
    {
        id: 2,
        title: 'Music Next',
        description:
            'Music Next is a Spotify-alike web app that allows you to host your own music and listen to it online. Responsive',
        image: '/img/projects/music-next.png',
        tag: '',
        tools: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe (test mode)'],
        demo: 'https://music-next-murex.vercel.app',
    },
    {
        id: 3,
        title: 'TG2VK Reposter',
        description:
            "Node.js application that helps you to auto-repost your Telegram channel posts to your VK group's wall",
        image: '/img/projects/tg2vk-reposter.png',
        tag: 'Utilities',
        tools: ['Node.js', 'Express', 'MongoDB', 'Telegram Bot API', 'VK API'],
        demo: 'https://t.me/tg2vk_repost',
    },
    {
        id: 4,
        title: 'Whats API',
        description: 'Single-page online chatting application with multiple WhatsApp users using 3rd party API',
        image: '/img/projects/whats-api.png',
        tag: 'Utilities',
        tools: ['React', 'Green API'],
        demo: 'https://trainymonked.github.io/whats-api',
    },
    {
        id: 5,
        title: 'Бот Псина',
        description: 'Чат-бот, который лает на голосовые и кружочки в группе Telegram',
        image: '/img/projects/psina-ebot.png',
        tag: 'ROFL',
        tools: ['Node.js', 'Express', 'Telegram Bot API'],
        demo: 'https://t.me/psina_ebot',
        hidden: true,
    },
    {
        id: 6,
        title: 'Кумыс',
        description: 'Рофло-лендинг о пользе кумыса',
        image: '/img/projects/koumiss.png',
        tag: 'ROFL',
        tools: ['HTML', 'CSS'],
        demo: 'https://skyenot.online/koumiss',
        hidden: true,
    },
    {
        id: 7,
        title: 'skyenot portfolio',
        description: 'Simple yet elegant portfolio website',
        image: '/img/projects/skyenot-portfolio.png',
        tag: 'Portfolio',
        tools: ['HTML', 'CSS', 'JavaScript'],
        demo: 'https://skyenot.online',
    },
    {
        id: 8,
        title: 'Careers',
        description: 'Careers tab for a company website with admin panel',
        image: '/img/projects/careers.png',
        tag: '',
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'TinyMCE'],
        demo: '',
        hidden: true,
    },
    {
        id: 9,
        title: 'Fancy Todo',
        description: 'My everyday use website. Schedule todo app',
        image: '/img/projects/fancy-todo.png',
        tag: '',
        tools: ['React', 'Material UI', 'Node.js', 'Express', 'MongoDB'],
        demo: 'https://trainymonked.github.io/todo',
    },
    {
        id: 10,
        title: 'ChatBot',
        description: 'Telegram bot which uses OpenAI API to talk to ChatGPT',
        image: '/img/projects/chatbot.png',
        tag: 'Utilities',
        tools: ['Node.js', 'Express', 'OpenAI API', 'Telegram Bot API'],
        // demo: 'https://t.me/UsernameIsNotTaken_Bot',
    },
    {
        id: 11,
        title: 'This portfolio',
        description: "The website you're currently on",
        image: '/img/projects/this-portfolio.png',
        tag: 'Portfolio',
        tools: ['TypeScript', 'React', 'Tailwind CSS'],
        demo: 'https://trainymonked.github.io/portfolio',
    },
    {
        id: 12,
        title: 'HTML Resume (+ .pdf)',
        description: 'Interactive resume website with the option to download a PDF file',
        image: '/img/projects/resume.png',
        tag: '',
        tools: ['HTML', 'CSS'],
        // demo: 'https://trainymonked.github.io/resume',
        hidden: true,
    },
    {
        id: 13,
        title: 'Figures',
        description: 'Figures is a game where you need to match the shapes. Responsive',
        image: '/img/projects/figures.png',
        tag: 'Games',
        tools: ['PixiJS', 'JavaScript', 'HTML', 'CSS'],
        demo: 'https://trainymonked.github.io/pixi-figures',
    },
    {
        id: 14,
        title: 'Tetris',
        description: 'Tetris mini game using plain JavaScript. Desktop-only',
        image: '/img/projects/tetris.jpg',
        tag: 'Games',
        tools: ['JavaScript', 'HTML', 'CSS'],
        demo: 'https://trainymonked.github.io/tetris',
    },
    {
        id: 15,
        title: 'KinoPulse',
        description: 'Simple landing page as a task. Responsive',
        image: '/img/projects/kinopulse.jpg',
        tag: 'Landings',
        tools: ['HTML', 'CSS', 'Animate.css', 'jQuery', 'Fancybox'],
        demo: 'https://trainymonked.github.io/batman',
    },
    {
        id: 16,
        title: 'Yoga Tours',
        description: 'Yoga Tours is a large landing page that I created from mocks for portfolio. Responsive',
        image: '/img/projects/yoga-tours.jpg',
        tag: 'Landings',
        tools: ['HTML', 'CSS', 'JavaScript', 'Slick'],
        demo: 'https://trainymonked.github.io/yoga-india',
    },
    {
        id: 17,
        title: 'Multiplayer Gaming Platform',
        description: 'The platform where players can engage in multiplayer games across various genres',
        image: '/img/projects/gaming-platform.png',
        tag: 'Games',
        tools: ['React', 'Material UI', 'Node.js', 'WebSocket', 'PostgreSQL'],
        demo: '',
        hidden: true,
    },
    {
        id: 18,
        title: 'Email-Alike Messenger',
        description: 'The platform where users can send messages in real-time to other users using nicknames',
        image: '/img/projects/mail-messenger.png',
        tag: 'Social',
        tools: ['React', 'Material UI', 'Node.js', 'WebSocket', 'PostgreSQL'],
        demo: '',
        hidden: true,
    },
    {
        id: 19,
        title: 'Spotify Clone',
        description: "Spotify web app's clone",
        image: '/img/projects/spotify-clone.png',
        tag: '',
        tools: ['React', 'Material UI', 'Spotify Web API'],
        demo: '',
        hidden: true,
    },
    {
        id: 20,
        title: 'trainymonked portfolio',
        description: 'My old portfolio',
        image: '/img/projects/trainymonked-portfolio.png',
        tag: 'Portfolio',
        tools: ['HTML', 'CSS', 'JavaScript'],
        // demo: 'https://trainymonked.github.io',
    },
    {
        id: 21,
        title: 'VK Mutual',
        description: 'Mutual friends search web app',
        image: '/img/projects/vk-mutual.png',
        tag: 'Social',
        tools: ['Vue.js', 'Tailwind CSS', 'Pinia', 'VK API', 'lodash'],
        demo: 'https://trainymonked.github.io/vk-vue',
    },
]

/*

{ id: , title: '', description: '', image: '', tag: '', tools: [], demo: '', },

*/

export default initialCards
