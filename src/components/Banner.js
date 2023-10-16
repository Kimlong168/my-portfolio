import React from "react";
import GradientBtn from "./GradientBtn";
// tmages
import Image from "../assets/kimlong.jpg";
// import Image from "../assets/avatar.svg";
// icons
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              KIM <span>LONG</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                speed={50}
                cursor={true}
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Digital Marketer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              When you face a problem, God is giving you a chance to learn a
              lesson. Don't quit, keep fighting and you will learn something new
              and valuable.
            </motion.p>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-x-6 my-8 justify-center lg:justify-start"
            >
              <a href="https://github.com/Kimlong168" className="text-2xl">
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/kimlonggggggg_101?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                className="text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/phnompenhcrown.fc.7?mibextid=ZbWKwL"
                className="text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@__c609?is_from_webapp=1&sender_device=pc"
                className="text-2xl"
              >
                <FaTiktok />
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex max-w-max  gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
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
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            className="flex-1 mx-auto hidden lg:block"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              className="rounded-full pl-[100px] pb-[40px]"
              src={Image}
              alt={Image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
