import Link from 'next/link'
import { contactData } from '../data/data'

const renderContacts = contactData.map((contact, i) => {
  return (
    <Link key={i} href={contact.href}>
      <div className="py-4 px-2 sm:px-4 lg:px-2 mb-4 sm:mb-8 flex items-center justify-start bg-zinc-300 dark:bg-zinc-800 rounded-md w-full 2xl:w-[48%] hover:bg-opacity-70 dark:hover:bg-opacity-50 hover:cursor-pointer">
        <div className="ml-4 sm:ml-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {contact.icon}
        </div>
        <p className="ml-6 sm:ml-12 text-xs sm:text-base lg:text-lg">{contact.link}</p>
      </div>
    </Link>
  )
})

const Contact = () => {
  return (
    <div id="contact" className="pt-8 xl:pt-16 lg:pb-4">
      <h2 className="mt-20 mb-10 xl:mb-20 text-3xl md:text-4xl xl:text-5xl tracking-widest dark:text-white">Contact</h2>
        <p className="text-sm md:text-base xl:text-lg w-[90%] sm:w-3/4 lg:w-2/3 py-2 leading-6 md:leading-7 lg:leading-8 xl:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
          Thank you for visiting my portfolio. If you have any questions or would like to know more about my work, 
          please feel free to contact me. I am always open to new opportunities, whether it is a job or a collaboration 
          on a project, so please don't hesitate to reach out.
        </p>
        <p className="mt-10 text-base md:text-lg xl:text-xl py-2 leading-6 md:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
          You can contact me through the following ways:
        </p>
      <div className="mt-8 md:mt-16 pb-16 lg:pb-24 text-zinc-900 dark:text-zinc-100 flex flex-wrap justify-between">
          {renderContacts}
      </div>
  </div>
  )
}

export default Contact