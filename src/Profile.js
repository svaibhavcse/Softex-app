import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import './Softex.css'
import {useAuth} from './Authentication'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "./profilebackground.jpg";
import {useNavigate} from "react-router-dom";
export const Profile = () => {
  const navigate = useNavigate();
    const auth = useAuth()
    const[newPass,setnewPass]=useState("")
    const[currPass,setCurrpass]=useState("")
    const[flag,setFlag] = useState(false)
    const changePass=()=>{
      let temp= 0
      for(let i of auth.users){
        if(i.name ===  auth.currUser.name && i.password === currPass){
          if(i.password !== newPass){
          i.password = newPass
          temp = 2}
          else{
            temp = 1
          }
        }
      }
      if(temp === 0){
        toast.warn("Old Password Doesn't Match!")
      }
      else if(temp === 1){
         toast.info("Please Enter A New Password!")
      }
      else{
        toast.success("Password Updated Successfully!")
      }
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
      />{" "}
      <br />
      <br />
      <br />
      <div className="profile-container">
        <h1>P r o f i l e</h1>
        <br />
        {auth.currUser.gender == "male" && (
          <>
            <img src={require("./maleavatar.png")} />
          </>
        )}
        {auth.currUser.gender == "female" && (
          <>
            <img src={require("./femaleavatar.png")} />
          </>
        )}
        <br></br>
        <br />
        <h4> NAME : {auth.currUser.name}</h4> <br></br>
        <h4> Email : {auth.currUser.email}</h4> <br></br>
        <Button
          variant="outline-light"
          onClick={() => setFlag(true)}
          style={{ width: "25%", margin: "20px" }}
        >
          Edit Password
        </Button>{" "}
        &ensp;
        <Button
          variant="outline-light"
          onClick={() => {auth.setcurrUser({});auth.setLogged(false); navigate("/")}}
          style={{ width: "25%", margin: "20px" }}
        >
         Log Out
        </Button>
        {flag && (
          <div className="profile-innercontainer">
            <br />
            <input
              placeholder="Old Password"
              type="password"
              onChange={(e) => {
                setCurrpass(e.target.value);
              }}
            ></input>
            <br />
            <input
              placeholder="New Password"
              type="password"
              onChange={(e) => {
                setnewPass(e.target.value);
              }}
            ></input>
            <br />
            &ensp;{" "}
            <Button
              onClick={changePass}
              variant="outline-dark"
              style={{ width: "25%", margin: "20px" }}
            >
              {" "}
              Done{" "}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
