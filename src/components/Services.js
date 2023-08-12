import React from "react";
import SkillBox from "./SkillBox";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
import GradientBtn from "./GradientBtn";
// services data
import services from "../serviceData";
const Services = () => {
  return (
    <section className="section mt-0 lg:mb-24" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
    mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 font-bold">What I Do. </h2>
            <div className="font-semibold max-w-[455px] mb-16">
              {/* I'm a Freelance Front-end Developer with over 5 years of
              experience. */}
              I am passionate about Software Engineering, Web Development,
              Designing and Digital Marketing.
            </div>
            <GradientBtn content="See my work" link="#work" />
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <SkillBox {...item} link="#" />
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
