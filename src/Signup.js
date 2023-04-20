import React, { useState } from "react";
import "./Softex.css"
import Button from "react-bootstrap/Button";

import {useAuth} from './Authentication';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "./signupbackground.jpg";
export const Signup = () => {
  const auth = useAuth()
  const[name,setName]=useState("")
  const[email,setEmail]= useState("")
  const[pass,setPass] = useState("")
  const [gender, setGen] = useState("none");
  const signUp = (e) =>{
    auth.signup(name, email, pass, gender)
     e.preventDefault()   
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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
      <div class="signup-container">
        <h1>S i g n U p</h1>
        <br />
        <form onSubmit={signUp}>
          <input 
            placeholder="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
          <br />
          <input
            type="email"
            placeholder="email-id"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <input
            type="password"
            placeholder="password"
            required
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
          <br></br>
          <select
           
            value={gender}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          >
            <option  value="none">
              Select Gender
            </option>
            <option  value="male">
              Male
            </option>
            <option  value="female">
              Female
            </option>
          </select>
          <br />

          <Button
            variant="dark"
            type="submit"
            style={{ width: "25%", margin: "20px" }}
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}