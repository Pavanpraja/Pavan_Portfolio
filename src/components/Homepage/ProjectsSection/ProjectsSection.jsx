"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projectsSectionData";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#3a59eb]">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my latest work and projects across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:flex max-md:flex-col max-md:w-full">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <Card
                className="cursor-pointer group hover:shadow-xl hover:border-[#3a59eb] transition-all duration-500 dark:bg-[#1f2937] border-l-[.5rem] border-[#00000018] dark:border-[#bababa29] ease-in-out"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      className="aspect-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#3a5beb8f] opacity-0 group-hover:opacity-100 w-0 group-hover:w-full duration-300 flex items-center justify-center transition-all ease-in-out">
                      <span className="text-white font-semibold text-2xl">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-emerald-600 font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 truncate">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.slice(3).map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-indigo-100 dark:bg-[#6366f1] px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      <h1>...</h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#f1f1f13b] backdrop-blur-[4px] z-[1000] flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] border-[#a7a7a781] hover:border-[#3a59eb] border-l-[.5rem] max-md:max-h-[68vh] dark:bg-black overflow-y-auto transition-all duration-500 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <Image
                    width={1500}
                    height={1500}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-84 aspect-auto rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <span className="text-sm text-emerald-600 font-medium">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6 dark:text-gray-300">
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-gray-100 dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 px-4 py-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black dark:border-[.1rem] dark:border-gray-300 active:scale-90 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
