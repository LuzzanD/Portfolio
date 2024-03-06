import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-28 flex flex-col bg-zinc-300 dark:bg-zinc-800 dark:bg-opacity-30 w-[90%] sm:w-[46%] 2xl:w-[40%] rounded-sm group">
      <p className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg xl:text-xl p-4 lg:p-6 text-center">
        {project.name}
      </p>
      <div className="mx-auto w-[90%] h-[300px] relative lg:h-[400px] rounded-sm dark:bg-zinc-900 bg-zinc-100">
        {project.image ? (
          <>
            <div className="relative overflow-hidden w-full h-full rounded-sm">
              <Image
                objectFit="cover"
                layout="fill"
                alt="project image"
                className="grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
                src={project.image}
              />
            </div>
            <div className="w-full flex absolute sm:hidden bottom-0 group-hover:flex">
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.site ? "w-1/2" : "w-full rounded-br-sm"
                } text-zinc-100 rounded-bl-sm text-sm lg:text-base text-center font-semibold py-2 lg:py-4 bg-zinc-800 
            bg-opacity-80 hover:bg-opacity-100 hover:cursor-pointer`}
              >
                Code
              </a>
              <a
                href={project?.site}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.site ? "w-1/2" : "hidden"
                } text-zinc-100 rounded-br-sm text-sm lg:text-base text-center font-semibold py-2 lg:py-4 bg-zinc-800 
              bg-opacity-80 hover:bg-opacity-100 hover:cursor-pointer border-l-zinc-900 border-l-[2px]`}
              >
                Website
              </a>
            </div>
          </>
        ) : (
          <h1 className="mt-32 lg:mt-40 text-xl lg:text-3xl text-zinc-900 dark:text-zinc-100 text-center">
            Under development...
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
};

export default ProjectCard;
