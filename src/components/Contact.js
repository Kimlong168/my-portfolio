import React from "react";
import Footer from "./Footer";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
// icons
import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="contact" className="section mb-[500px] lg:mb-[120px]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="h2 text-accent mb-6 font-bold">Contact Me. </h2>
          <address className="text-gradient btn-link max-w-max ">
            Phnom Penh, Cambodia
          </address>
          <div className="italic text-gradient btn-linktransition-all max-w-max ">
            <a href={`mailto:kimlong5244@gmail.com`}>kimlong5244@gmail.com</a>
          </div>
          <div className="italic text-gradient btn-link transition-all max-w-max ">
            <a href="https://t.me/kimlong_chann">855 86 961 256</a>
          </div>
        </motion.div>
        {/* <div>
          <p className="text-center mt-10">Follow me on:</p>
        </div> */}
        {/* <div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-x-8 lg:gap-x-24 my-8 justify-center"
          >
            <a
              href="https://github.com/Kimlong168"
              className="grid place-items-center text-3xl  lg:text-5xl  rounded-full p-2 border-4 border-transparent hover:border-white transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/kimlonggggggg_101?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              className="grid place-items-center text-3xl lg:text-5xl  rounded-full p-2 border-4 border-transparent hover:border-white transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/phnompenhcrown.fc.7?mibextid=ZbWKwL"
              className="grid place-items-center text-3xl  lg:text-5xl  rounded-full p-2 border-4 border-transparent hover:border-white transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@__c609?is_from_webapp=1&sender_device=pc"
              className="grid place-items-center text-3xl  lg:text-5xl  rounded-full p-2 border-4 border-transparent hover:border-white transition-all"
            >
              <FaTiktok />
            </a>
          </motion.div>
        </div> */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex gap-x-8 lg:gap-x-24 my-8 justify-center"
        >
          <Footer scrollTop={scrollTop} isScrollTop={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
