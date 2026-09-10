import React from "react";
import { motion } from "framer-motion";

const skills = [
  ["01", "Languages", ["Java", "JavaScript", "HTML", "CSS"]],
  ["02", "Frameworks", ["React.js", "Node.js", "Express.js", "REST API"]],
  ["03", "Databases", ["MongoDB", "MySQL", "SQLite"]],
  ["04", "Tools & Cloud", ["AWS", "Git", "GitHub", "Postman", "VS Code"]],
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#08090c] px-6 py-24 font-ubuntu"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-12">
          <p className="text-md uppercase tracking-[0.3em] text-yellow-400 text-center">
            What I Use
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white text-center">
            My <span className="text-yellow-400">Skills.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map(([number, title, items], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-[#111216] p-6 transition-all hover:border-yellow-400/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {number}
                </span>

                <span className="h-px w-12 bg-white/10 transition-all group-hover:w-20 group-hover:bg-yellow-400/50" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-yellow-400">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-gray-400 transition-colors group-hover:text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Problem Solving · Team Collaboration · Adaptability · Communication
        </p>

      </div>
    </section>
  );
};

export default Skills;