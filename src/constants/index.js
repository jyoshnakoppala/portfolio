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
  pythonDsa,
  pythonEverybody,
  ai,
  pythonWeb

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
      "Led QA strategy for Amazon’s advertising platform across 3 Tier-1 projects, ensuring end-to-end quality from sprint planning to release, coordinating with 4+ cross-functional teams to deliver features across 20+ marketplaces.",
      "Contributed to the design and development of a scalable automation tool using native AWS services to suspend expired accounts, eliminating 90% of manual effort and enhancing ad platform compliance.",
      "Enhanced CI/CD reliability and accelerated delivery by developing unit/integration tests, resolving cross-marketplace blockers, and unblocking 60% of Slideshow Ads use cases through strategic API testing.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Brane Enterprises",
    icon: brane,
    iconBg: "#000000",
    date: "Oct 2021 - June 2022",
    points: [
      "Led the development of key HRMS modules using Entity Query Language (EQL) and Apache Superset, enabling real-time dashboards and improving employee engagement by 20% through enhanced performance tracking.",
      "Engineered scalable microservices and hierarchical approval workflows with Java Spring Boot, REST APIs, and core OOP principles, streamlining organizational decision-making and cutting response times by 30%.",
      "Enhanced test coverage and user experience by contributing to test automation with Postman and Cypress and resolving 20+ frontend issues in AngularJS and JavaScript, reducing manual effort by 40%.",
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
        name: "Tailwind CSS",
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
    name: "Architecting with Google Compute Engine",
    description:"Gained hands-on experience in designing and deploying scalable, secure, and reliable infrastructure on Google Cloud. Covered networking, compute services, storage, and best practices for cloud architecture.",
    tags: [
      
    ],
    image: googleCloud,
    source_code_link: "https://www.coursera.org/account/accomplishments/specialization/EPDKKE766LN7",
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
    name: "Using Python to Access Web Data",
    description:"Demonstrated the ability to extract and process web data using Python. Gained hands-on skills in web scraping, regular expressions, XML/JSON parsing, and understanding HTTP protocols to access and manipulate APIs and web content effectively.",
    tags: [
      
    ],
    image: pythonWeb,
    source_code_link: "https://www.coursera.org/account/accomplishments/specialization/EPDKKE766LN7",
  },
  {
    name: "Programming for Everybody",
    description:"Built a strong foundation in Python programming through hands-on exercises, focusing on variables, loops, conditionals, and functions. Gained practical experience in writing Python scripts and understanding core programming constructs.",
    tags: [
      
    ],
    image: pythonEverybody,
    source_code_link: "https://www.coursera.org/account/accomplishments/specialization/EPDKKE766LN7",
  },
  {
    name: "AI For Everyone",
    description:"Gained foundational knowledge in AI and ML, including neural networks, ethics, and business impact. Developed insight into strategic implementation and responsible AI adoption.",
    tags: [
      
    ],
    image: ai,
    source_code_link: "https://www.coursera.org/account/accomplishments/specialization/EPDKKE766LN7",
  },
];


export { services, technologies, experiences, testimonials, projects, certificates };
