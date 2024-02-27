import { useState } from "react";

import "./output.css";
import { toastifyNotification } from "./utils/toastifyNotification";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  toastifyNotification(`Mode changed to ${darkMode}`, "success");

  const toggleDarkMode = async () => {
    setDarkMode(!darkMode);
    setTimeout(async () => {
      // alert("Toggle dark mode");
      await toastifyNotification("Toggle dark mode", "success");
    }, 1000);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex min-h-screen min-w-screen flex-col p-12 bg-neutral-500 dark:bg-neutral-900">
        <p className="dark:bg-neutral-100">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <button
        className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-neutral-100 rounded-full text-white dark:text-neutral-900 font-semibold"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
