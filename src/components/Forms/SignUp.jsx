import React from 'react'

function SignUp() {
  function handleSignupButton(){
      alert('SignUp button clicked');
  }
  return (
    <div className="flex justify-center items-center min-h-screen  min-w-1.5 bg-gray-300">
      <form className="flex flex-col gap-4 bg-white  p-6 rounded shadow-md">
      <div className="flex flex-row justify-between gap-2">
      <div>
        <label htmlFor='first-name' className="mb-1 font-semibold">First name:-</label>
        <input className="p-2 border border-gray-400 rounded" type="text" />
      </div>
      <div>
      <label htmlFor='last-name'  className="mb-1 font-semibold">Last name:-</label>
      <input className="p-2 border border-gray-400 rounded" type="text" />
      </div>
      </div>

      <div>
        <label htmlFor='email' className="mb-1 font-semibold">Email:-</label>
        <input type="email" className="p-2 border border-gray-400 rounded"/>
      </div>

      <div>
        <label htmlFor="password"  className="mb-1 font-semibold">Password</label>
        <input type="password" className="p-2 border border-gray-400 rounded"/>
      </div>

      <div>
        <label htmlFor="confirm-password"  className="mb-1 font-semibold">Confirm Password</label>
        <input type="password" className="p-2 border border-gray-400 rounded"/>
      </div>
        <button onClick = {handleSignupButton} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          SignUp
        </button>
      </form>
    </div>
  )
}
export default SignUp