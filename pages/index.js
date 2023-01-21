import About from '../Components/About'
import Technologies from '../Components/Technologies'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

export default function Home() {
 
  return (
      <main className="duration-500 bg-zinc-100 dark:bg-zinc-900 px-8 sm:px-12 md:px-20 lg:px-24 xl:px-40">
        <section>
         <About />
        </section>
        <section>
          <Technologies />
        </section>
        <section className="py-10">
          <Projects />
        </section>
        <Contact />
      </main>
  );
}
