import { contactData } from "../data/data";
import ContactCard from "../shared/ContactCard";

const Contact = () => {
  return (
    <div id="contact" className="mt-8 pt-8 xl:pt-16 lg:pb-4">
      <h2 className="mt-20 mb-10 xl:mb-20 text-3xl md:text-4xl xl:text-5xl tracking-widest dark:text-white">
        Contact
      </h2>
      <p className="text-sm md:text-base xl:text-lg w-[90%] sm:w-3/4 lg:w-2/3 py-2 leading-6 md:leading-7 lg:leading-8 xl:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
        Thank you for visiting my portfolio. If you have any questions or would
        like to know more about my work, please feel free to contact me. I am
        always open to new opportunities, whether it is a job or a collaboration
        on a project, so please don&apos;t hesitate to reach out.
      </p>
      <p className="mt-10 text-base md:text-lg xl:text-xl py-2 leading-6 md:leading-8 tracking-wider text-zinc-800 dark:text-zinc-100">
        You can contact me through the following ways:
      </p>
      <div className="mt-8 md:mt-16 pb-16 lg:pb-24 text-zinc-900 dark:text-zinc-100 flex flex-wrap justify-between">
        {contactData.map((contact, i) => (
          <ContactCard contact={contact} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
