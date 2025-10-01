import React from 'react';

function Login() {
  function handleLoginButton(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    // Handle login logic here
    console.log('Login button clicked');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
        onSubmit={handleLoginButton}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-400 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-400 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
