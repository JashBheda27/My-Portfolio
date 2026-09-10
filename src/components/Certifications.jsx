import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "AWS Cloud Practitioner",
    issuer: "AWS Skill Builder",
    date: "June 2026",
  },
  {
    number: "02",
    title: "Machine Learning (Core)",
    issuer: "Talent Battle",
    date: "December 2023",
  },
  {
    number: "03",
    title: "Java Programming (Core)",
    issuer: "Raj Computers",
    date: "June 2023",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-[#08090c] px-6 py-24 font-ubuntu"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-md uppercase tracking-[0.3em] text-yellow-400 text-center">
            My Achievements
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white text-center">
            Certifications<span className="text-yellow-400">.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-[#111216] p-6 transition-all hover:border-yellow-400/30"
            >

              {/* Top */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {cert.number}
                </span>

                <Award
                  size={20}
                  className="text-yellow-400 transition-transform group-hover:rotate-12"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-2 text-sm text-purple-400">
                {cert.issuer}
              </p>

              {/* Date */}
              <p className="mt-4 text-xs text-gray-500">
                {cert.date}
              </p>

              {/* Bottom line */}
              <div className="mt-6 h-px w-10 bg-yellow-400/50 transition-all group-hover:w-full" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;