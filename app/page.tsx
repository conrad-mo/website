"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="ctp-latte dark:ctp-mocha flex lg:relative flex-col">
      <div className="sticky top-0 max-h-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center min-h-screen" id="home">
        <div className="flex flex-col items-start text-6xl lg:text-8xl gap-2 m-16 lg:m-4">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hidden"
            variants={containerVariants}
          >
            <motion.div variants={fadeIn}>Conrad</motion.div>
            <motion.div variants={fadeIn}>Mo</motion.div>
            <div className="flex flex-col text-4xl lg:text-5xl my-8 gap-6">
              <motion.div className="text-ctp-rosewater" variants={fadeIn}>
                Software Developer
              </motion.div>
              <motion.div className="text-ctp-lavender" variants={fadeIn}>
                Studying CS @ University of Toronto
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="flex min-h-screen justify-center items-center gap-16 lg:gap-[170px] mx-16 flex-col-reverse lg:flex-row py-16 lg:p-0"
        id="aboutme"
      >
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hidden"
            variants={containerVariants}
            className="flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-11"
          >
            <motion.div className="text-5xl lg:text-6xl" variants={fadeIn}>About Me</motion.div>
            <motion.div className="lg:max-w-md text-ctp-subtext1" variants={fadeIn}>
              Hi! I&apos;m Conrad Mo, a Computer Science undergrad at the
              University of Toronto. Coding and playing the piano are my two
              main passions. Music, in particular, holds a special place in my
              heart, allowing me to express myself in unique ways.
            </motion.div>
            <motion.div className="lg:max-w-md text-ctp-subtext1" variants={fadeIn}>
              When I&apos;m not immersed in the world of music and coding, I
              enjoy dining out with friends and exploring Toronto&apos;s diverse
              culinary offerings. Food is a wonderful way to connect, but my
              true love is the piano. If you&apos;re as passionate about music
              and enjoy good company, let&apos;s connect and share our stories!
            </motion.div>
          </motion.div>
        <div className="flex items-center">
          <div className="flex items-center shrink basis-auto rounded-full overflow-hidden w-[200px] lg:w-[400px] h-[200px] lg:h-[400px]">
            <Image
              src="/pfp.jpg"
              alt="Profile picture"
              priority={true}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="flex min-h-screen justify-center items-center my-8 py-16 lg:p-0"
        id="skills"
      >
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="text-5xl lg:text-6xl">Skills</div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center lg:justify-between lg:flex-wrap">
            <div className="flex flex-col text-3xl gap-2 items-center justify-center lg:items-start">
              <div className="text-xl text-ctp-mauve">Programming</div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col items-center lg:items-start">
                <div>Python</div>
                <div>C</div>
                <div>Java</div>
                <div>Dart</div>
                <div>HTML/CSS</div>
                <div>Javascript/Typescript</div>
                <div>Bash</div>
                <div>Rust</div>
                <div>SQL</div>
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-2 items-center lg:items-start">
              <div className="text-xl text-ctp-yellow">
                Frameworks/Libraries
              </div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col items-center lg:items-start">
                <div>Flutter</div>
                <div>React</div>
                <div>Node JS</div>
                <div>Riverpod</div>
                <div>Tailwind CSS</div>
                <div>CI/CD</div>
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-2 items-center lg:items-start">
              <div className="text-xl text-ctp-green">Tools</div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col items-center lg:items-start">
                <div>Git</div>
                <div>Github</div>
                <div>Linux</div>
                <div>Docker</div>
                <div>Firebase</div>
                <div>Postman</div>
                <div>AWS</div>
                <div>GCP</div>
                <div>Azure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-16" id="projects">
        <div className="flex flex-col items-center lg:items-start justify-start gap-8 max-w-5xl">
          <div className="text-5xl lg:text-6xl">Projects</div>
          <div className="flex flex-wrap gap-8 w-full justify-center lg:justify-start">
            <div className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4">
              <Image
                src="/utscgeoguessr.jpg"
                alt="UTSC Geoguessr Banner"
                width={400}
                height={400}
              />
              <div className="mx-4">
                <div>UTSC Geoguessr</div>
                <div>
                  A game built with python and tkinter that aims to help new
                  students learn the campus. Submission for HTV 7
                </div>
              </div>
            </div>
            <div className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4">
              <Image
                src="/retina.png"
                alt="Retina Banner"
                width={400}
                height={400}
              />
              <div className="mx-4">
                <div>Retina</div>
                <div>
                  A desktop app that focuses on helping people explore their
                  surroudings by providing definitions of objects around them.
                  Submission for UoftHacksX
                </div>
              </div>
            </div>
            <div className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4">
              <Image
                src="/viridian.png"
                alt="Viridian Banner"
                width={400}
                height={400}
              />
              <div className="mx-4">
                <div>Viridian</div>
                <div>
                  A mobile app for iOS and Android that allows users to talk to
                  each other
                </div>
              </div>
            </div>
            <div className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4">
              <Image
                src="/speechsummarizer.png"
                alt="Speech Summarizer Banner"
                width={400}
                height={400}
              />
              <div className="mx-4">
                <div>Speech Summarizer</div>
                <div>
                  A mobile app that summarizes long meetings into short meeting
                  summaries. Winner of Best Mobile Hack at Ignition Hacks 2023
                </div>
              </div>
            </div>
            <div className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4">
              <Image
                src="/website.png"
                alt="Website Banner"
                width={400}
                height={400}
              />
              <div className="mx-4">
                <div>Website</div>
                <div>A website to display myself, skills and projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const fadeIn: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.5, // Delay children by 1 second
      delayChildren: 0.5, // Start delaying children after 1 second
    },
  },
};
