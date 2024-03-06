import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="py-4 px-2 sm:px-4 lg:px-2 mb-4 sm:mb-8 flex items-center justify-start bg-zinc-300 dark:bg-zinc-800 rounded-md w-full 2xl:w-[48%] hover:bg-opacity-70 dark:hover:bg-opacity-50 hover:cursor-pointer"
    >
      <div className="ml-4 sm:ml-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {contact.icon}
      </div>
      <p className="ml-6 sm:ml-12 text-xs sm:text-base lg:text-lg">
        {contact.link}
      </p>
    </a>
  );
};

export default ContactCard;
