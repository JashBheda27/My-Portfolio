import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    number: "01",
    title: "MyBlog",
    type: "MERN • AI",
    description:
      "AI-powered blogging platform with authentication, dashboards, blog publishing and AI content generation.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/JashBheda27/Blogs",
    live: "https://your-live-demo.com",
  },
  {
    number: "02",
    title: "Fund Chain",
    type: "Web3 • DApp",
    description:
      "Decentralized crowdfunding platform with smart contracts, wallet authentication and campaign management.",
    tech: ["MERN", "Solidity", "Web3", "MetaMask"],
    github: "https://github.com/JashBheda27/PROJECT_CROWDFUNDING-MASTER",
    live: "https://your-live-demo.com",
  },
  {
    number: "03",
    title: "AI Exam Notes",
    type: "Full Stack • AI",
    description:
      "AI-powered application that generates structured exam notes, summaries, diagrams and charts.",
    tech: ["React", "Node.js", "Gemini", "MongoDB"],
    github: "https://github.com/JashBheda27/ai-exam-notes-generator",
    live: "https://your-live-demo.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#08090c] px-6 py-24 font-ubuntu"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-md uppercase tracking-[0.3em] text-yellow-400 text-center">
            What I've Built
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white text-center">
            My <span className="text-yellow-400">Projects.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-pointer" >

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative min-w-[85%] snap-start rounded-3xl border border-white/10 bg-[#111216] p-7 transition-all hover:border-yellow-400/30 md:min-w-[48%] lg:min-w-[38%]"
            >

              {/* Number + Type + Links */}
              <div className="mb-8 flex items-center justify-between">

                <span className="text-sm text-gray-600">
                  {project.number}
                </span>

                <div className="flex items-center gap-2">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="rounded-full border border-white/10 p-2 text-gray-400 transition-all hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
                  >
                    <FaGithub size={17} />
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="rounded-full border border-white/10 p-2 text-gray-400 transition-all hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <ExternalLink size={17} />
                  </a>

                </div>

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white">
                {project.title}
                <span className="text-yellow-400">.</span>
              </h3>

              {/* Type */}
              <p className="mt-1 text-xs uppercase tracking-widest text-purple-400">
                {project.type}
              </p>

              {/* Description */}
              <p className="mt-4 min-h-[80px] text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom link */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-yellow-400 transition-all hover:gap-4"
              >
                View Live
                <span>→</span>
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;