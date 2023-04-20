import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Pagenotfound = () => {
 const navigate = useNavigate();
const message = ()=>{
  toast.error("Redirecting To Softex")
  setTimeout(()=>{
    navigate('/')
  },4000)
}
  return (
    <body onLoad={message}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <img src={require("./404.jpg")} width="50%" position="center" />
      404 That's An Error.... The requested URL was not found on this server.
    </body>
  );
}
