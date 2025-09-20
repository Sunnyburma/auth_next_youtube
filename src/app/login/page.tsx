"use client"
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

function Login(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "" 
    });
    const [loading, setLoading] = React.useState(false);
    
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onLogin = async()=>{
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data)
            toast.success("Login success");
            // localStorage.setItem('token', response.data.token)
            router.push("/profile"); 
            
        } catch (error:any) {
            console.log("login failed", error.message)
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }  

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    })


    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1 className="text-green-600">{loading ? "processing" : "Login"}</h1>
            <br/>
            <hr/>
                <label>Email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
                  focus: border-gray-600"
                id="email"
                type = "text"
                name="email"
                placeholder="Enter the Email"
                value = {user.email}
                onChange = {(e)=>setUser({...user,email: e.target.value})}
                />

            <label>Password</label>
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

                <button 
                 onClick={onLogin}
                 className="p-2 border border-gray-300 rounded-lg md-4 
                focus:outline-none focus: border-gray-600">
                   {buttonDisabled  ? "No Login " : "Login Here"}
                </button>
                <br/>
                <Link href="/signup">Visit Signup</Link>
            
            </div>


        
    )
}
export default Login;