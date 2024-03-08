import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div>
      <Head>
        <title>Andrija&apos;s portfolio</title>
        <meta
          name="Andrija's portfolio."
          content="Simple one page portfolio site."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`font-Raleway ${darkMode ? "dark" : ""}`}>
        <div className="sticky top-0 z-50">
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </div>
        <div>{children}</div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
