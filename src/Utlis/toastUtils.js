import { toast } from "react-toastify";

const properties = {
  position: "bottom-right",
  autoClose: 2000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const ToastHandler = (type, message) => {
  if (type === "error") toast.error(message, properties);
  else if (type === "warn") toast.warn(message, properties);
  else if (type === "success") toast.success(message, properties);
  else if (type === "info") toast.info(message, properties);
};
