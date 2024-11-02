import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify';




const Login = () => {
// =============  custom use state
const [email , setmail] = useState('')
const [emailError , setemailError] = useState('')
const [password , setpassword] = useState('')
const [passwordError , setpasswordError] = useState('')

// ============  all function part 

const handelEmail = (item)=>{
 setmail(item.target.value)
  setemailError('')

}

const handelPassword = (tem)=>{
  setpassword(tem.target.value)
  setpasswordError('')
}

const handelSubmit =(e)=>{
  e.preventDefault()
  if( email == '') {
    setemailError("Please enter your email")
  }
   if(password == ''){
    setpasswordError("Please enter your password")
  }
  
  else{
    setemailError('')
    setpasswordError('')

    toast.success('🦄 Success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  }


  return (
    <>
<div className='w-full h-[100vh] bg-slate-200 flex justify-center items-center'>
   <form
   className='w-[400px] h-[500px] bg-[#D4F6FF] flex justify-center items-center flex-col gap-6 shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.3)] rounded-md'>
  <h1 className='text-4xl font-semibold mb-4'>Login</h1>
  {/* ============================        input email */}
      <input
      onChange={(d)=>handelEmail(d)}
       className='outline-none text-[16px] py-2 px-4 text-gray-900 w-[300px] rounded-md pl-2 shadow-[0px_0px_8px_3px_rgba(59,_130,_246,_0.5)]' type="text" placeholder='Enter your email...' />
       <p className='text-red-700 mt-[-25px] ml-[-130px] text-[15px]'>{emailError}</p>
  {/* ============================        input password */}

      <input
      onChange={(k)=>handelPassword(k)}
      className='outline-none text-[16px] py-2 px-4 text-gray-900 w-[300px] rounded-md pl-2 shadow-[0px_0px_8px_3px_rgba(59,_130,_246,_0.5)]' type="password" placeholder='Password' />
      <p className='password text-red-700 mt-[-25px] ml-[-105px] text-[15px]'>{passwordError}</p>
      <button
      onClick={handelSubmit}
      type='Submit' className='py-3 px-10 bg-[#133E87] text-white font-semibold rounded-lg shadow-[0px_0px_8px_3px_rgba(59,_130,_246,_0.5)]'>SIGN IN</button>
      <h3 className=''>Don't have an account? <Link className='text-[#133E87] text-[18px] font-bold [text-shadow:_2px_2px_1px_rgba(241,4,4,0.47)]' to="/register">Sign up</Link></h3>
   </form>
</div>
    </>
  )
}

export default Login