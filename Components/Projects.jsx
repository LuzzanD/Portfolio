/* eslint-disable react/no-unescaped-entities */
import { projectsData } from "../data/data";
import Image from "next/image";

const renderProjects = projectsData.map((project) => {
  return (
    <div
      key={project.name}
      className="mt-10 sm:mt-12 md:mt-16 lg:mt-28 flex flex-col bg-zinc-300 dark:bg-zinc-800 dark:bg-opacity-30 w-[90%] sm:w-[46%] 2xl:w-[40%] rounded-lg group"
    >
      <p className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg xl:text-xl p-4 lg:p-6 text-center">
        {project.name}
      </p>
      <div className="mx-auto w-[90%] h-[300px] relative lg:h-[400px] rounded-lg dark:bg-zinc-900 bg-zinc-100">
        {project.image ? (
          <>
            <div className="relative overflow-hidden w-full h-full rounded-lg">
              <Image
                objectFit="cover"
                layout="fill"
                alt="project image"
                className="grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
                src={project.image}
              />
              )
            </div>
            <div className="w-full flex absolute sm:hidden bottom-0 group-hover:flex">
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.site ? "w-1/2" : "w-full rounded-br-lg"
                } text-zinc-100 dark:text-zinc-800 rounded-bl-lg text-sm lg:text-base text-center font-semibold py-2 lg:py-4 bg-zinc-800 dark:bg-zinc-100
                bg-opacity-80 hover:bg-opacity-100 dark:bg-opacity-80 dark:hover:bg-opacity-100 hover:cursor-pointer`}
              >
                Code
              </a>
              <a
                href={project?.site}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.site ? "w-1/2" : "hidden"
                } text-zinc-100 dark:text-zinc-800 rounded-br-lg text-sm lg:text-base text-center font-semibold py-2 lg:py-4 bg-zinc-800 dark:bg-zinc-100
                  bg-opacity-80 hover:bg-opacity-100 dark:bg-opacity-80 dark:hover:bg-opacity-100 hover:cursor-pointer border-l-zinc-900 border-l-[2px]`}
              >
                Website
              </a>
            </div>
          </>
        ) : (
          <h1 className="mt-32 lg:mt-40 text-xl lg:text-3xl text-zinc-900 dark:text-zinc-100 text-center">
            Comming soon...
          </h1>
        )}
      </div>
      <div className="py-4 lg:py-6 w-[100%] m-auto flex justify-around items-center rounded-md">
        {project.techs?.map((icon, i) => (
          <div key={i} className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
});

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
      <div className="flex flex-wrap justify-around">{renderProjects}</div>
    </div>
  );
};

export default Projects;
