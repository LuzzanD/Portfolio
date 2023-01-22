import { useState } from 'react'
import Link from 'next/link'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { navbarData } from '../data/data'

const Navbar = ({darkMode, handleClick}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-zinc-200 flex justify-between items-center realtive py-4 dark:bg-zinc-800 px-8 sm:px-12 md:px-20 lg:px-24 xl:px-40"> 
      <div className={`z-50 -mt-1 font-bold ${mobileMenuOpen ? 'rotate-360 duration-500' : '-rotate-360 duration-500'} bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 dark:to-zinc-100 to-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 text-3xl lg:text-4xl`}>
        <Link href="/">a</Link>
      </div>
      <div>
        <ul className="hidden sm:flex text-sm lg:text-base drop-shadow-grad font-semibold justify-around sm:gap-6 md:gap-8 lg:gap-16">
          {navbarData.map(item => {
            return (
              <li className="tracking-wider cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 dark:to-zinc-100 to-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
                <Link href={item.href}>{item.section}</Link>
              </li>
            )
           })}
        </ul>
      </div>
      <div className="block sm:hidden">
        <div className={`absolute ${mobileMenuOpen ? 'top-0 duration-500' : '-top-[500px] duration-500'} right-0 p-6 w-full bg-zinc-200 dark:bg-zinc-800`}>
          <ul className="flex flex-col text-sm font-bold drop-shadow-grad items-center justify-around gap-6 ">
            {navbarData.map(item => {
              return (
                <li onClick={() => setMobileMenuOpen(false)} className="tracking-wider cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 dark:to-zinc-100 to-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
                  <Link href={item.href}>{item.section}</Link>
                </li>
              )
            })}
            <li 
              onClick={handleClick} 
              className={`${darkMode ? 'text-zinc-200' : 'text-zinc-800'} mt-4 tracking-wider cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 dark:to-zinc-100 to-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200`}
            >
              {darkMode ? 'Light theme' : 'Dark theme'}
            </li>
          </ul>
        </div>
        <div className="z-50" onClick={() => setMobileMenuOpen(prevValue => !prevValue)}>
          <div className={`mb-1 block ${mobileMenuOpen ? '-mb-[1px] rotate-135 duration-500': '-rotate-180 duration-500'} sm:hidden h-[1px] w-[18px] dark:bg-zinc-100 bg-zinc-900`}></div>
          <div className={`${mobileMenuOpen ? '-translate-y-[300px] duration-500' : 'translate-y-[0] duration-500'} h-[1px] w-[18px] dark:bg-zinc-100 bg-zinc-900`}></div>
          <div className={`mt-1 block ${mobileMenuOpen ? '-mt-[1px] -rotate-135 duration-500' : 'rotate-180 duration-500'} sm:hidden h-[1px] w-[18px] dark:bg-zinc-100 bg-zinc-900`}></div>
        </div> 
      </div>
      <div onClick={handleClick} className='hidden sm:block cursor-pointer text-lg lg:text-2xl'>
        {darkMode ? <BsSunFill className="text-zinc-100 opacity-80 hover:opacity-60"/> : <BsFillMoonStarsFill className="text-zinc-900 opacity-80 hover:opacity-60"/>}
      </div>
    </nav>
  )
}

export default Navbar