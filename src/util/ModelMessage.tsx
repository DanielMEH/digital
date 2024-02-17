import {  toast } from "react-toastify";


export  const messageWarding = (message:string)=>{
    return toast.warn(`${message}' `, {
     position: "bottom-right",
     autoClose: 4000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
   }

   export const messageSuccess = (message:string)=>{
    return toast.success(`
     ${message}' 
   `, {
     position: "bottom-right",
     autoClose: 4000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
   }

    export const messageError = (message:string)=>{
    return toast.error(`
     ${message}'
    `, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    export const messageInfo = (message:string)=>{
    return toast.info(`${message}'`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }