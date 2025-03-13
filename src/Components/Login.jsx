import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = async(e) => {
    try{
      e.preventDefault();
      console.log(`${email},\n ${password}`)
    const response = await axios.post(`${backendUrl}/api/users/adminLogin`,{email, password})
      console.log(response)
      if(response.status==200){
        setToken(response.data.token);
      }else{
        toast.error(response.data.message);
      }
    }catch(err){
        console.log(err);
        toast.error(err.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
    <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={onSubmitHandler}>
            <div className="mb-2 min-w-72">
                <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="email" placeholder="your@email.com" required />
            </div>
            <div className="mb-2 min-w-72">
                <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="password" placeholder="Enter your Password" required />
            </div>
            <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black" type="submit">Login</button>
        </form>
    </div>
</div>
  )
}

export default Login