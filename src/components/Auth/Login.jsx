// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault()
//         handleLogin(email, password)
//         setEmail("")
//         setPassword("")
//     }

//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className="border-2 rounded-xl border-emerald-600 p-20">
//             <form 
//             onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=> {
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
//                 <input 
//                 required 
//                 value={password}
//                 onChange={(e)=> {
//                     setPassword(e.target.value)
//                 }}
//                 className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
//                 <button className='text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full mt-8 w-full placeholder:text-white' >Log in</button>
//             </form>
//         </div>

//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react'; // icons

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="w-full max-w-md bg-[#1e1e1e] p-10 rounded-2xl shadow-lg border border-emerald-600 transition-all duration-300 hover:shadow-emerald-700">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-500">Welcome Back 👋</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-emerald-400" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border border-emerald-600 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-emerald-400" />
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border border-emerald-600 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition duration-200 py-3 rounded-full text-lg font-medium"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
