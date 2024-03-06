/* eslint-disable react/no-unescaped-entities */
import ProjectCard from "../shared/ProjectCard";
import { projectsData } from "../data/data";

const Projects = () => {
  return (
    <div id="projects" className="mt-8 -mb-20 md:-mb-8 xl:mb-0 pt-8 xl:pt-16">
      <h2 className="mb-10 xl:mb-20 mt-20 text-3xl md:text-4xl xl:text-5xl tracking-widest dark:text-white">
        Projects
      </h2>
      <p className="text-sm md:text-base xl:text-lg w-[90%] sm:w-3/4 lg:w-2/3 py-2 leading-6 md:leading-7 lg:leading-8 xl:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
        Ever since I started learning programming, I've been trying to combine
        learning theories and doing practical work. In this section, you will
        find a selection of projects that I have worked on. Each project
        features a list of technologies used, a link to the project's website,
        and a link to the project's Github code. Through these projects, I have
        been able to apply my recently acquired knowledge of new technologies in
        real-world scenarios.
      </p>
      <p className="mt-10 text-base md:text-lg xl:text-xl py-2 tracking-wider text-zinc-800 dark:text-zinc-100">
        You are welcome to check some of my projects I've completed during my
        journey in Frontend Development:
      </p>
      <div className="flex flex-wrap justify-around">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
