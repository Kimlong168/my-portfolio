import React from "react";
import GradientBtn from "./GradientBtn";

// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// vartant
import { fadeIn } from "../variants";
import CountUpNumber from "./CountUpNumber";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section mb-0 lg:mb-24 " ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:hidden rounded-full object-fit overflow-hidden border-b-2  border-pink-500  bg-about bg-contain bg-no-repeat h-[350px] mix-blend-lighten bg-top"
        ></motion.div>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:block rounded-full overflow-hidden border-b-2 border-pink-500 flex-1 bg-about bg-contain bg-no-repeat h-[640px]  mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* text */}
            <div>
              <h2 className="text-accent h2 font-bold mt-5">About me.</h2>
              <div className="mb-4 font-semibold">
                {/* I'm a Freelance Front-end Developer with over 5 years of
                experience. */}
                I'm a year 3 student majoring in Computer Science at the CADT,
                specializing in Software Engineering.
              </div>
            </div>
            <p className="mb-6">
              Hi there, My name is Chann Kimlong. I am a front-end web
              developer. I can provide clean code and pixel perfect design. I
              also make the website more & more interactive with web animations.
              A responsive design makes your website accessible to all
              users,regardless of their device. You can contact me whenever you
              need help, i will try my best to deal with your problem as much as
              possible.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <CountUpNumber
                inView={inView}
                start={0}
                end={5}
                duration={3}
                text1="years of"
                text2="Experience"
              />
              <CountUpNumber
                inView={inView}
                start={0}
                end={25}
                duration={3}
                text1="Project"
                text2="Completed"
              />
              <CountUpNumber
                inView={inView}
                start={0}
                end={119}
                duration={3}
                text1="Satisfied"
                text2="Clients"
              />
            </div>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <GradientBtn
                content="Contact me"
                link="https://t.me/kimlong_chann"
              />
              <a
                href="https://t.me/kimlong_chann"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
