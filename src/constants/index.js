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
  aws,
  googleCloud,
  pythonDsa
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
    name:"Selenium",
    icon : selenium
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
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

const certificates = [
  {
    name: "AWS Certified Developer – Associate ",
    description:
      "Validated proficiency in developing, deploying, and debugging cloud-based applications using AWS. Demonstrates strong understanding of core AWS services, best practices, and cloud-native development.",
    tags: [
      
    ],
    image: aws,
    source_code_link: "https://www.credly.com/badges/8ba62525-7ffc-4acc-9610-a6a5c13a0bde/linked_in_profile",
  },
  {
    name: "Python Data Structures",
    description:
      "Explored core data structure concepts in Python, emphasizing practical implementation and problem-solving. Gained proficiency in manipulating complex data types to build efficient and readable programs.",
    tags: [
     
    ],
    image: pythonDsa,
    source_code_link: "https://www.coursera.org/account/accomplishments/verify/GB3SFPPQNHQK",
  },
  {
    name: "Architecting with Google Compute Engine",
    description:"Gained hands-on experience in designing and deploying scalable, secure, and reliable infrastructure on Google Cloud. Covered networking, compute services, storage, and best practices for cloud architecture.",
    tags: [
      
    ],
    image: googleCloud,
    source_code_link: "https://www.coursera.org/account/accomplishments/specialization/EPDKKE766LN7",
  },
];


export { services, technologies, experiences, testimonials, projects, certificates };
