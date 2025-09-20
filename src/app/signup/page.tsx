"use client"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";

function Signup(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    });

     console.log(user.username)

     const [buttonDisabled, setButtonDisabled] = React.useState(false);

     const [loading, setLoading] = React.useState(false);

     const onSignup = async() =>{
        try {
            setLoading(true);
           const response =  await axios.post("/api/users/signup", user);
           console.log("successfully signup ", response.data);
           router.push("/login");

            
        } catch (error:any) {
            console.log("signup failed", error.message)
            toast.error(error.message); 

        }finally{
            setLoading(false);
        }

     } 
     useEffect(()=>{
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled( true);
        }
     },[user]);

    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1 className="text-green-600">{loading  ? "Processing" : "Signup"}</h1>
            <br/>
            <hr/>
            <label htmlFor="username">Username</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
                  focus: border-gray-600"
                id="username"
                type = "text"
                name="username"
                placeholder="Enter the username"
                value = {user.username}
                onChange = {(e)=>setUser({...user,username: e.target.value})}
                />
               

                <label htmlFor="email">Email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
                  focus: border-gray-600"
                id="email"
                type = "text"
                name="email"
                placeholder="Enter the email"
                value = {user.email}
                onChange = {(e)=>setUser({...user,email: e.target.value})}
                />

            <label htmlFor="password">Password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
                  focus: border-gray-600"
                id="password"
                type= "password"
                name="password"
                placeholder="Enter the password"
                value = {user.password}
                onChange = {(e)=>setUser({...user,password: e.target.value})}
                />

                <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg md-4 
                focus:outline-none focus: border-gray-600" >
                 { buttonDisabled ?  "No Signup" : "Signup" }
                </button>
                <br/>
                <Link href="/login">Visit Login</Link>
            
            </div>


        
    )
}
export default Signup;