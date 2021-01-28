import { toast as reactToastfy, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default {
  success: (msg: string) => reactToastfy.success(msg, toastOptions),
  warn: (msg: string) => reactToastfy.warn(msg, toastOptions),
  info: (msg: string) => reactToastfy.info(msg, toastOptions),
  error: (msg: string) => reactToastfy.error(msg, toastOptions),
  default: (msg: string) => reactToastfy(msg, toastOptions),
};
