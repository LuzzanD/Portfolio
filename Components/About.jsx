import andrija from "../public/andrija.png"
import Image from 'next/image'

const About = () => {
  return (
   <div id="about" className="-mb-20 md:-mb-8 xl:mb-0 pt-2">
     <h2 className="mb-12 sm:mb-16 mt-10 xl:mt-16 text-3xl md:text-4xl xl:text-5xl tracking-widest dark:text-zinc-100">About</h2>
     <div className="flex flex-col lg:flex-row-reverse relative justify-end lg:justify-between gap-12">
        <div className="rounded-full h-52 w-52 sm:h-64 sm:w-64 xl:w-80 xl:h-80 relative right-0 lg:top-8 overflow-hidden border-[5px]">
          <Image src={andrija} layout="fill" objectFit="cover"/>
        </div>
        <div className="flex flex-col items-start w-full lg:w-[65%] justify-start gap-6">
          <h2 className="mt-0 sm:mt-4 lg:mt-8 uppercase text-3xl sm:text-4xl lg:text-5xl drop-shadow-grad text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-300">
              Andrija Stojanović
          </h2>
          <h3 className="-mt-4 sm:-mt-2 mb-4 xl:mb-8 text-base md:text-lg xl:text-xl dark:text-zinc-100">
              Junior Frontend / React Developer
          </h3>
          <p className="text-sm md:text-base xl:text-lg py-2 w-[85%] leading-6 md:leading-7 lg:leading-8 xl:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
            My name is Andrija Stojanovic, and I am a Civil Engineer by education who has decided to switch career path to web development and 
            have been working mostly with React as a frontend JavaScript library. I am a highly motivated and analytical individual, 
            with a strong interest in exploring various programming languages and opportunities within the IT industry. I am excited to take on 
            new challenges and learn from experienced professionals in the field. 
          </p>  
        </div>
     </div>
   </div>
  )
}

export default About