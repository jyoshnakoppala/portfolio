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
          I'm a software developer with 2+ years of experience and a Master's in Computer Science from SUNY Buffalo. I deliver high-quality, scalable solutions by leveraging deep expertise in Java, Spring Boot, and React. With a strong foundation in object-oriented design, data structures, and distributed systems, my technical expertise includes building cloud-native applications, developing dynamic frontends, and managing CI/CD pipelines with AWS services.
          </p>

          <p className='mb-4'>
          My experience extends from designing robust microservices and real-time dashboards to implementing comprehensive QA strategies using tools like Selenium, Postman, and Cypress. This integrated skill set enables me to effectively build and test production-grade systems, directly contributing to reducing manual effort and enhancing the reliability of high-impact products.
          </p>

          <p className='mb-4'>
          Passionate about transforming complex problems into efficient, user-friendly applications, I thrive on collaborating with cross-functional teams to achieve technical excellence and solve real-world challenges.
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
