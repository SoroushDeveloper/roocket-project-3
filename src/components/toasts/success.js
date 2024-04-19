import {toast} from "react-toastify";

export default function Success(message) {
    const successToast = () => toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
    successToast();
}