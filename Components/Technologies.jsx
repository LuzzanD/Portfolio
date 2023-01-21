import { technologiesData } from '../data/data'

const Technologies = () => {
  return (
    <div id="technologies" className="mt-8 -mb-20 md:-mb-8 xl:mb-0 pt-8 xl:pt-16">
      <div>
        <h2 className="mb-10 xl:mb-20 mt-20 text-3xl md:text-4xl xl:text-5xl tracking-widest dark:text-white">Technologies</h2>
        <p className="text-sm md:text-base xl:text-lg w-[90%] sm:w-3/4 lg:w-2/3 py-2 leading-6 md:leading-7 lg:leading-8 xl:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
          As a junior web developer, I am always seeking new opportunities to improve my skills and gain experience in the field. 
          I am aware that I still have a lot to learn, but I am dedicated to staying up-to-date with the latest advancements in 
          web development, and am committed to continue my professional growth. Through my work on various projects, 
          I have been able to get a grasp on the technologies listed below. 
        </p>
        <p className="mt-10 text-base md:text-lg xl:text-xl py-2 tracking-wider text-zinc-800 dark:text-zinc-100">
          Technologies that I am familiar with and currently using to develop my projects:
        </p>
      </div>
      <div className="mt-10 sm:mt-12 md:mt-20 flex flex-wrap gap-8 items-center justify-around">
        {technologiesData.map((icon, i) => {
            return (<div key={i} className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] xl:w-[70px] xl:h-[70px]">{icon}</div>)
        })}
      </div>
   </div>
  )
}

export default Technologies