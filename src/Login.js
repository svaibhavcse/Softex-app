import React ,{useState} from 'react'
import "./Softex.css";
import Button from "react-bootstrap/Button";
import { useAuth } from './Authentication'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "./loginbackground.jpg"
export const Login = () => {
  const auth = useAuth()
  const[name,setName]=useState("")
  const[pass,setPass]=useState("")
  const navigate = useNavigate()
  const loginCheck=()=>{
     let flag = false
     for(let i of auth.users){
       if(i.name===name || i.email === name){
        flag = true
        if(i.password === pass){
          toast.success("Login Success!")
          auth.setcurrUser(i,true)
          auth.setLogged(true);
          setTimeout(()=>{navigate('/')},2000)
          break
        }
        else{
          toast.warn("Password Doesn't Match!")
        }
       }
     }
     if(!flag){
      toast.error("Username Does Not Exist!")
     }
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "97vh",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="login-container">
        <h1>L o g i n </h1>
        <br />
        <input
          style={{ color: "white" }}
          placeholder="username/email-id"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>{" "}
        <br />
        <input
          style={{ color: "white" }}
          type="password"
          placeholder="password"
          required
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>{" "}
        <br />
        <Button
          variant="outline-light"
          style={{ width: "25%" ,margin:"20px"}}
          onClick={loginCheck}
        >
          Login
        </Button>
        
      </div>
    </div>
  );
}
