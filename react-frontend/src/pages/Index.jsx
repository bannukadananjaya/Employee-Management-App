import React, { useState } from 'react'
import { login } from '../api/userApi';

function Index() {
    const [data,setData] = useState({});

    function handleInput(e){
        let newInput = {[e.target.name]: e.target.value}
        setData({...data,...newInput})
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-2 bg-cover bg-center'
    style={{backgroundImage:"url('/Employee-Management-System-Juntrax.jpg')"}}>
        {/* <img className='bg-img bg-contain w-[100%] h-[100%] absolute z-[-1]' src='/Employee-Management-System-Juntrax.jpg' alt="" /> */}
        <h1 className='text-5xl text-white drop-shadow-lg'>Employee Managemnt System</h1>
        <form action={login(data.email,data.password)} className='flex flex-col gap-2 p-4'>
            <input className='form-input' type="text" name='email' placeholder='Email' onChange={(e)=>{handleInput(e)}}/>
            <input className='form-input'  type="password" name='password' placeholder='password' onChange={(e)=>{handleInput(e)}}/>
        </form>
        <p className='text-3xl text-white drop-shadow-md'>Clcik here to login</p>
        <a href="/Home" className='btn btn-primary shadow-lg'>Login</a>
    </div>
  )
}

export default Index