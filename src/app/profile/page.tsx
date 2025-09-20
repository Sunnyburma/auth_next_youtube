"use client"
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import React from "react";
import {useRouter } from "next/navigation";

function Profile(){
    const router = useRouter();
    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            router.push("./login")
            
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }


    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <h1>Profile_Page</h1>
            <hr/>
            <button onClick={logout}
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 tp-4"  >Logout</button>
        </div>
    )
}
export default Profile;