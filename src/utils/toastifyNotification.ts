import { ToastContent, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type MsgType = string | React.ReactNode;
type ToastType = "error" | "warning" | "success";

export const toastifyNotification = async (msg: MsgType, type: ToastType) => {
  const message: ToastContent<unknown> =
    typeof msg === "string" ? msg : () => msg;

  console.log("toastifyNotification -> message", msg);

  await toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
