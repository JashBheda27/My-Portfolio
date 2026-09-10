import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#08090c] px-6 py-24 font-ubuntu"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Get In Touch
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">
            Let's <span className="text-yellow-400">Connect.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Have an opportunity, project, or idea in mind?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Email */}
        <motion.a
          href="mailto:jash27august@gmail.com"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="group mx-auto mt-10 flex max-w-xl items-center justify-between rounded-2xl border border-white/10 bg-[#111216] p-5 text-left transition hover:border-yellow-400/40"
        >
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-yellow-400/10 p-3 text-yellow-400">
              <Mail size={21} />
            </span>

            <div>
              <p className="text-xs text-gray-500">
                Email Me
              </p>

              <p className="mt-1 text-sm text-gray-200 md:text-base">
                jash27august@gmail.com
              </p>
            </div>
          </div>

          <ArrowUpRight
            size={20}
            className="text-gray-500 transition group-hover:text-yellow-400"
          />
        </motion.a>

        {/* Location + Socials */}
        <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={17} className="text-purple-400" />
            Mumbai, India
          </div>

          <div className="hidden h-4 w-px bg-white/10 sm:block" />

          <div className="flex gap-3">

            <a
              href="https://github.com/JashBheda27"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/jash-bheda-069768344"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-purple-500/40 hover:text-purple-400"
            >
              <FaLinkedin size={18} />
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jash Bheda · Built with React
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;