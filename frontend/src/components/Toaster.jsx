import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    pauseOnHover: true,
    theme: "colored"
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    pauseOnHover: true,
    theme: "colored"
  });
};

let Toaster = () => {
  return <ToastContainer />;
};

export default Toaster;
