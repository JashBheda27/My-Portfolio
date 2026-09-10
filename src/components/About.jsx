import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#08090c] px-6 py-24 font-ubuntu"
        >
            <div className="mx-auto max-w-5xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <p className="mb-2 text-md uppercase tracking-[0.3em] text-yellow-400">
                        Get To Know Me
                    </p>

                    <h2 className="text-5xl font-bold text-white">
                        About <span className="text-yellow-400">Me</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative flex h-[350px] items-center justify-center"
                    >
                        <div className="absolute h-64 w-64 rotate-12 rounded-[2rem] border border-yellow-400/30" />

                        <div className="absolute h-64 w-64 -rotate-12 rounded-[2rem] border border-purple-500/30" />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="relative flex h-52 w-52 items-center justify-center rounded-[2rem] bg-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.3)]"
                        >
                            <div className="text-center">
                                <h3 className="text-3xl font-black text-black font-ubuntu">
                                    BE 
                                </h3>

                                <p className="mt-2 text-lg font-bold uppercase tracking-widest text-black font-ubuntu">
                                    INFORMATION TECHNOLOGY
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[2rem] border border-white/10 bg-[#111216] p-8"
                    >
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
                            Who am I?
                        </p>

                        <h3 className="mb-5 text-3xl font-bold text-white">
                            I'm a passionate{" "}
                            <span className="text-yellow-400">
                                Software Engineer.
                            </span>
                        </h3>

                        <p className="leading-7 text-gray-400">
                            I enjoy building modern and functional web
                            applications using full-stack and AI technologies.
                            I'm always learning, solving problems, and turning
                            ideas into meaningful digital experiences.
                        </p>

                        {/* Tech */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {[
                                "React",
                                "Node.js",
                                "MongoDB",
                                "JavaScript",
                                "AI",
                                "AWS",
                            ].map((tech, index) => (
                                <span
                                    key={tech}
                                    className={`rounded-full border px-3 py- text-sm ${index % 2 === 0
                                            ? "border-yellow-400/30 text-yellow-400"
                                            : "border-purple-500/30 text-purple-400"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;