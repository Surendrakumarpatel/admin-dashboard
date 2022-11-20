import React, { useState } from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';

const url = `${BaseUrl}/adminLogin`;
 
function Login({setUser,setLoggedIn}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const eventHandler2 = (e) => {

        setEmail(e.target.value);

    }
    const eventHandler3 = (e) => {

        setPassword(e.target.value);

    }
    // get method to get admin email and password

    const getData = async(e) =>{
        e.preventDefault();
        await axios.post(url, JSON.stringify({
            email:email,
            password:password
        })).then((res,req)=>{
            setUser(res.data);
            setLoggedIn(true)
          if(res.data === 200){
              localStorage.setItem("TOKEN",res.data);
              navigate("/dashboard");
          } else
            alert("Login Credential Invalid!");
       }).catch((err)=>{
         console.log(err);
       })
    }
   
 
 
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='app-name-logo'>
                    <h1>Dashboard Login</h1>
                </div>
                <div className='input-box'>
                    <form onSubmit={getData}>
                        <TextField type="email" className='name' onChange={eventHandler2} value={email} id="loginEmail" label="Email" variant="standard" />
                        <TextField type="password" className='name' onChange={eventHandler3} value={password} id="loginPassword" label="Password" variant="standard" />
                        <Button type="submit" className="signup-btn" id="sendlogin" name="sendlogin" variant="contained">Login</Button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login