import React, { useState } from "react";

import AchievementBox from "./AchievementBox";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";

import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

import tosquiz from "../assets/tosquiz.png";
import tictactoe from "../assets/tictactoe.png";
import movie from "../assets/movie.png";
import guessingNumber from "../assets/guessingNumber.png";
import book from "../assets/book.png";
import amazing from "../assets/amazing.png";
import boyloy from "../assets/boyloy.png";
import kimlong1 from "../assets/kimlong1.png";
import todolist from "../assets/todolist.png";
import qrcode from "../assets/qrcode.png";
import somleng from "../assets/somleng.png";
import weather from "../assets/weather.png";
import youtubeClone from "../assets/youtubeClone.png";
import facebookClone from "../assets/facebookClone.png";
import automata from "../assets/automata.png";
import portfilio2 from "../assets/portfolio2.png";
import linkTree from "../assets/linkTree.png";
import sportsNews from "../assets/sportsNews.png";
import pos from "../assets/php_pos.png";
const Work = () => {
  const [showProjects, setShowProjects] = useState(true);
  return (
    <section id="work" className="lg:pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mb-10">
          <div className="flex-1 flex flex-col lg:flex-row gap-y-12 gap-10 mb-10 lg:mb-0">
            {/* text */}
            <div className="flex-1">
              <h2 className="h2 leading-tight text-accent font-bold">
                My Latest Works.
              </h2>
              <p className="max-w-sm mb-16">
                Click on View all projects to see my completed projects. And
                click on the image to link to the project.
              </p>

              <button
                className="btn btn-sm"
                onClick={() => setShowProjects((prevState) => !prevState)}
              >
                {showProjects ? "Hide Projects" : "View all projects"}
              </button>
            </div>
            {/* image */}
            <AchievementBox
              direction="right"
              delay={0.2}
              amount={0.3}
              pretitle="Web development"
              image={img1}
              title="Tailwind, ReactJS, PHP, Laravel, MySQL"
              latest={true}
            />
          </div>
        </div>

        {/* 2 images */}
        <div className="flex flex-col lg:flex-row gap-10">
          <AchievementBox
            direction="right"
            delay={0.2}
            amount={0.3}
            pretitle="UX/UI Design"
            image={img2}
            title="Figma, Photoshop, Canva"
            latest={true}
          />
          <AchievementBox
            direction="right"
            delay={0.2}
            amount={0.3}
            pretitle="Digital Marketing"
            image={img3}
            title="Facebook, Instagram, Tiktok, Telegram"
            latest={true}
          />
        </div>

        {/* all projects */}
        {showProjects && (
          <div className="mt-10">
            <div class="text-gradient flex justify-between items-center">
              <span className="font-bold">All Projects</span>
              <span
                className="w-8 h-8 cursor-pointer bg-white/20 grid place-items-center rounded-full"
                onClick={() => setShowProjects(false)}
              >
                ✖️
              </span>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto mt-5">
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://beat-022-qr-code.netlify.app/"
                image={qrcode}
                title="Beat 022 QR Code"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://tos-quiz-leng.netlify.app/"
                image={tosquiz}
                title="TOS Quiz Leng"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/Tic-tac-toe-js/index.html"
                image={tictactoe}
                title="Tic Tac Toe Game"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/movie-new-app/index.html"
                image={movie}
                title="Movie App"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://youtube168-clone.netlify.app/"
                image={youtubeClone}
                title="Youtube Home page Clone"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/erobot.github.io/"
                image={facebookClone}
                title="Facebook Clone"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/guessing-number-game/"
                image={guessingNumber}
                title="Guessing Number Game"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/CamE-Book.github.io/"
                image={book}
                title="CamE-Book"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/Amazing-Cadt.github.io/html/"
                image={amazing}
                title="Ecommerce Website"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong168.github.io/Boyloy168.github.io/index.html"
                image={boyloy}
                title="Boyloy FT"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong1111.github.io/kimlong168.github.io/index.html"
                image={kimlong1}
                title="Portfolio Website (1)"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://animated-pixie-24aa12.netlify.app/"
                image={portfilio2}
                title="Portfolio Website (2)"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kangea-trov-tver.netlify.app/"
                image={todolist}
                title="To Do List"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://aksor-to-somleng.netlify.app/"
                image={somleng}
                title="Aksor To Somleng"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="#"
                image={weather}
                title="Weather App"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://github.com/Kimlong168/PHP_POS_SYSTEM"
                image={pos}
                title="PHP POS System"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://github.com/Kimlong168/my-shop/tree/master"
                image={pos}
                title="Laravel E-commerce website"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://automata-project.netlify.app/"
                image={automata}
                title="Automata Final Project (Group project)"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://kimlong-linktree.netlify.app/"
                image={linkTree}
                title="Link Tree"
              />
              <AchievementBox
                direction="right"
                delay={0.2}
                amount={0.3}
                pretitle="Web development"
                url="https://k-news168.netlify.app/"
                image={sportsNews}
                title="Sports News"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
