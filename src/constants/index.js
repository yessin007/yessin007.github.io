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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  metamask,
  jenkins,
  maven,
  prometheus,
  grafana,
  nexus,
  angular,
  net,
  mysql,
  spring,
  solarchain,
  cocomarket,
  astree,
  mydevup,
    un,
    deux,
  tensorflow,
  yk,
  global,
  resume,
  yessin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    resume: resume,
  },

];

const services = [
  {
    title: "Blockchain",
    icon: web,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Finance  Economics",
    icon: backend,
  },
  {
    title: "Tennis",
    icon: creator,
  },
];

const technologies = [

  {
    name: "spring",
    icon: spring,
  },
  {
    name: "net",
    icon: net,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nexus",
    icon: nexus,
  },
  {
    name: "maven",
    icon: maven,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "metamask",
    icon: metamask,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "prometheus",
    icon: prometheus,
  },
  {
    name: "grafana",
    icon: grafana,
  },
];

const experiences = [
  {
    title: "Blockchain Developer Intern",
    company_name: "MyDevUp",
    icon: metamask,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developing a decentralized application (DAPP) for a solar panel campaign.",
      "Implementing smart contract functionality using Solidity and integrated it with a React front-end.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enabled secure transactions and seamless integration with blockchain technology.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Fiver",
    icon: net,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining dating website applications inspired by Tinder, using .NET and Angular. This dynamic and responsive platform offers users a seamless and engaging dating experience",
      "Key features of the website include a swipe-based matching system, real-time messaging, user profiles with customizable preferences, location-based search functionality, and personalized recommendations. By leveraging the capabilities of .NET on the backend, I ensured efficient data storage, secure authentication.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Machine Learning Developer Intern",
    company_name: "MyDevUp",
    icon: tensorflow,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "Analyzing data sets and designing algorithms to detect pets with accurate model.",
      "Developing a robust image detection system, leveraging TensorFlow and OpenCV to accurately detect and classify various objects, with a specific emphasis on pet detection.",
      "Utilizing deep learning techniques and TensorFlow's powerful neural network models to train and fine-tune object detection models for image recognition tasks, achieving high accuracy in pet detection.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Solar Chain",
    description:
      "Solar panel crowdfunding  platform allows individuals to launch campaigns, showcase their projects, connect with potential backers and seek financial support from the community.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
        image: html,
      },
      {
        name: "React",
        color: "green-text-gradient",
        image: html,
      },
      {
        name: "WEB3",
        color: "pink-text-gradient",
        image: html,
      },
    ],
    image: solarchain,
    source_code_link: "https://github.com/yessin007/Solar-Chain-Solidity-React",
  },
  {
    name: "CocoMarket",
    description:
      "Online platform allows businesses to configure and manage products (both physical and digital) across multiple sellers and for buyers where they purchase  goods and services on demand.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
        image: html,
      },
      {
        name: "Angular",
        color: "green-text-gradient",
        image: html,
      },
      {
        name: "RestApi",
        color: "pink-text-gradient",
        image: html,
      },
    ],
    image: cocomarket,
    source_code_link: "https://github.com/yessin007/CocoMarket_Spring_Angular",
  },
  {
    name: "Astree",
    description:
      "Comprehensive insurance dashboard platform that allows users to manage contracts, assign and manage reinsurance, while providing insights into profit versus liability.",
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
        image: html,
      },
      {
        name: "React",
        color: "green-text-gradient",
        image: html,
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
        image: html,
      },
    ],
    image: astree,
    source_code_link: "https://github.com/yessin007/Astree-Insurance-Management-react-.NET",
  },
];

export { services, technologies, experiences, testimonials, projects };
