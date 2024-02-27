import { ToastContainer } from "react-toastify";
import "./output.css";
import "react-toastify/dist/ReactToastify.css";
import Version01 from "./versions/Version01";

function App() {
  return (
    <>
      <Version01 />
      <ToastContainer />
    </>
  );
}

export default App;
