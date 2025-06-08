import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImg from "../assets/jyoshna.jpeg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>ABOUT ME</h2>
      </motion.div>

      <div className='mt-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
        {/* Text Section */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[15px] max-w-3xl leading-[28px]'
        >
          <p className='mb-4'>
          I'm a skilled software developer with strong proficiency in Java, Spring Boot, and React. With a Master’s in Computer Science from SUNY Buffalo and hands-on internship experience, I’ve built scalable, cloud-native applications by designing robust microservices and integrating real-time dashboards.
          </p>

          <p className='mb-4'>
            Alongside development, I have practical experience in QA engineering designing and executing test strategies for REST APIs and UIs using tools like Selenium, Postman, and Cypress. My contributions have helped reduce manual effort and improve the reliability of high-impact products.
          </p>

          <p className='mb-4'>
            I have a solid foundation in object-oriented design, data structures, and distributed systems, with hands-on expertise in REST APIs, CI/CD pipelines, AWS services, deep learning models and full-stack development. My background bridges both development and quality assurance, enabling me to build and test production-grade systems effectively.
          </p>

          <p className='mb-1'>
            I’m a quick learner and collaborate closely with cross-functional teams to deliver scalable, efficient, and user-friendly solutions that solve real-world problems.
          </p>

          <p>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold'>
              Let’s work together to bring your ideas to life!
            </span>
          </p>
        </motion.div>

        <motion.img
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          src={profileImg}
          alt='Profile'
          className='w-72 h-72 rounded-full border-[6px] border-white shadow-xl object-cover object-top translate-y-3 lg:ml-10'
        />
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
