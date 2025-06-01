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
  signLang,
  redux,
  tailwind,
  nodejs,
  interviewAi,
  mongodb,
  git,
  figma,
  docker,
  meta,
  amazon,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  brane,
  tripguide,
  threejs,
  java,
  python,
  taskManager,
  sql,
  firebase,
  selenium,
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
];

const services = [
  {
    title: "Software Development Engineer",
    icon: web,
  },
  {
    title: "Quality Assurance Engineer",
    icon: mobile,
  },

];

const technologies = [
  {
    name:"Java",
    icon: java
  },
  {
    name:"Python",
    icon:python
  },
  
  {
    name:"Reactjs",
    icon: reactjs
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {    
    name:"Sql",
    icon:sql
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name:"selenium",
    icon : selenium
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Quality Assurance Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Jan 2023 - June 2023",
    points: [
      "Built an internal testing tool with Java Spring Boot and AWS to automate account suspension, cutting manual effort by 90%",
      "Led QA for 3 Tier-1 projects in Amazon Ads, managing test planning, automation, and defect triage across 20+ marketplaces",
      "Designed custom test strategies using Public APIs, improving test coverage by 30% and reducing launch risks.",
    ],
  },
  {
    title: "Quality Assurance Intern",
    company_name: "Brane Enterprises",
    icon: brane,
    iconBg: "#000000",
    date: "Oct 2021 - June 2022",
    points: [
      "Designed and executed test cases across 15+ products, reducing bug rates by 30%.",
      "Tested 25+ REST APIs with Java and Spring Boot; automated key scenarios using Postman, Cypress, and Selenium, cutting manual effort by 40%.",
      "Improved defect resolution speed by 35% through clear RCA and effective collaboration using Jira and Agile practices.",
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
    name: "AI-Powered Job Interview Platform ",
    description:
      "Built a full-stack voice-based interview simulator using Vapi AI, Gemini, Firebase, and Next.js. Offers real-time dynamic questions, intelligent feedback, and a seamless, high-performance user experience across all devices",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: interviewAi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Task Manangement System",
    description:
      "Designed a scalable microservices-based platform with Spring Boot and React, enabling secure, role-based task operations across departments. Integrated Eureka and OpenFeign for seamless service discovery, ensuring 99.9% uptime and efficient multi-team collaboration.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "React Js",
        color: "green-text-gradient",
      },
    ],
    image: taskManager,
    source_code_link: "https://github.com/",
  },
  {
    name: "American Sign Language Detection",
    description:"Built a high-accuracy deep learning pipeline using PyTorch and OpenCV to recognize American Sign Language with 98% precision. Deployed a real-time web app via Flask and Streamlit, enhancing robustness by 12% through custom data augmentation techniques.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: signLang,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
