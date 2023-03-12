import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rizer,
  proximity,
  trendz,
  songLyrics,
  threejs,
} from '@/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Tech Enthusiast',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Proximity Works',
    icon: proximity,
    iconBg: '#383E56',
    date: 'May 2021 - October 2022',
    points: [
      `Worked on India's largest OTT Platforms on reducing app chunk (reduced it from 2.7MB to 128KB). Removed duplicated libs, implemented code splitting and chunk compression.`,
      `Improved performance throughout the application. Optimized scripts and state in components. Reduced Scripting, Painting and Rendering time. By 30% for home page and 40% for player page.`,
    ],
  },
  {
    title: 'React and React Native Developer',
    company_name: 'Rizer Technologies',
    icon: rizer,
    iconBg: '#E6DEDD',
    date: 'January 2020 - May 2021',
    points: [
      `Integrated Video conferencing using JITSI a free open-source web conferencing solution that saved the cost of premium Video conferencing software, saved 4% on the product cost.`,
      `Developed Student community and real-time chat which decreased bounce rate and increased student engagement by 10%.`,
      `Integrated JWPlayer to view video with different video quality options. It helped the students with a low bandwidth internet connection.`,
      `Build a Cross-platform mobile app using React-native, EXPO, Redux, and React-Native Paper Ui library.`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Trendz fashion',
    description:
      'Web-based platform E-commerce clothing and accessories platform that allow user to search product, view and purchase product from diffrent categories like Men, Women, Jewellery and Electronics.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'text-[#e89c0e]',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux',
        color: 'pink-text-gradient',
      },
    ],
    image: trendz,
    source_code_link: 'https://github.com/deepakbhadoriya/trendz-fashion',
    project_link: 'https://trendz-fashion.netlify.app',
  },
  {
    name: 'Song Lyrics Finder',
    description:
      'This app utilizes SONG API to search songs based on the singer, song name. And let users view and copy lyrics of the searched song. It also displays alert when user perform some action or API fails',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: songLyrics,
    source_code_link: 'https://github.com/deepakbhadoriya/lyrics-finder',
    project_link:
      'https://6400d9c9ac19fa0262ac2b50--idyllic-lily-28dfa1.netlify.app',
  },
];

export { services, technologies, experiences, testimonials, projects };
