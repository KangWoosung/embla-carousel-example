/*  2024-02-28 04:23:29

Embla Carousel

*/

import React, { useState } from "react";
import { toastifyNotification } from "../utils/toastifyNotification";
import Carousel01 from "./components/Carousel01";
import "./style/carousel.css";
import Carousel02 from "./components/Carousel02";
import Carousel03 from "./components/Carousel03";

const Version01 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = async () => {
    setDarkMode(!darkMode);
    setTimeout(async () => {
      // alert("Toggle dark mode");
      await toastifyNotification("Toggle dark mode", "success");
    }, 500);
  };

  return (
    <>
      <h3>Version01</h3>
      <div className={`${darkMode && "dark"}`}>
        <div className="flex min-h-screen min-w-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900">
          <h3 className="dark:text-white">Embla Carousel Example</h3>
          <Carousel01 />
          <Carousel02 />
          <Carousel03 />
        </div>
        <button
          className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-neutral-100 rounded-full text-white dark:text-neutral-900 font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default Version01;
