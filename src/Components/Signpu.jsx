import React from 'react'
import { Link } from 'react-router-dom'

const Signpu = () => {
  return (
    <>
    <div className="signpu w-full h-[100vh] bg-slate-200 flex justify-center items-center">
      <form className='w-[450px] h-[550px] bg-[#D4F6FF] flex justify-center items-center flex-col gap-6 shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.3)] rounded-md'>
     <h1 className='text-4xl font-bold mb-10'>Sign up</h1>
<div className="name flex justify-between items-center gap-5">
  <input className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] h-7 rounded-md w-[170px] outline-none pl-2' type="text" placeholder='First name' />
  <input className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] h-7 rounded-md w-[170px] outline-none pl-2' type="text" placeholder='Last name' />
</div>
<input className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] text-[16px] font-semibold outline-none rounded-md pl-3 w-[350px] h-[30px]' type="email" placeholder='Enter your email..' />
<input className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] text-[16px] font-semibold outline-none rounded-md pl-3 w-[350px] h-[30px]' type="password" placeholder='Creat passwerd'/>
<input className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] text-[16px] font-semibold outline-none rounded-md pl-3 w-[350px] h-[30px]' type="password" placeholder='Confirm password' />
<button className='shadow-[0px_0px_10px_3px_rgba(59,_130,_246,_0.5)] w-[350px] text-white h-[40px] bg-[#133E87] rounded-md tracking-wide font-semibold text-[18px] '>SIGN UP</button>

<h3>Alredy have an account? <Link className= ' text-[#133E87] text-[18px] font-bold [text-shadow:_2px_2px_1px_rgba(241,4,4,0.47)]' to={'/'}>Login here</Link></h3>



      </form>
    </div>
    </>
  )
}

export default Signpu