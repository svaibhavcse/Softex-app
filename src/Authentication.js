import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
const authContext = createContext();

export const Authentication = (props) => {
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);
  const [currUser,setcurrUser] = useState({})
  const navigate = useNavigate();
  
  const signup = (user, email, password,gender) => {
    let flag=false
    for( let i of users){
      if(i.name === user){
        flag = true
        toast.error("Username Already Exists! Please Choose A Different Username")
      }
    }
    if(!flag){
    toast.success("Successfully Created An Account");
    setUsers((prev)=>[...prev,{ "id": users.length +1 , "name": user, "email": email, "password": password,"gender":gender }]);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
   
    
    
     
    emailjs
      .send(
        "service_8gwv91m",
        "template_lbnsetp",
        {
          userName: user,
          userEmail: email,
          gendertype : gender
        },
        "E8UE2ZB29q1BPldz7"
      )
      .then(
        (response) => {
          console.log("EMAIL SENT SUCCESSFULLY !", response.status, response.text);
        },
        (err) => {
          console.log("EMAIL FAILED...", err);
        }
      );
   
    }
   }; //setting login details
  


  return (
    <authContext.Provider value={{users, signup, setLogged, logged, setcurrUser, currUser}}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
