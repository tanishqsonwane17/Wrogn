import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Animation CSS

       const Signup = () => {
         const navigate = useNavigate();
         const [form, setForm] = useState({
           name: '',
           email: '',
           password: '',
         });
       
         const handleChange = (e) => {
           setForm({ ...form, [e.target.name]: e.target.value });
         };
       
         const handleSubmit = async (e) => {
           e.preventDefault();
           try {
       const res = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/users/signup`, form, {
         withCredentials: true,
       });

      navigate('/product/delivery');
      console.log(res.data);
    } catch (err) {
      alert('Signup failed!');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg min-w-[320px] w-full max-w-md animate-slideFade"
      >
        <div className="text-center mb-6 flex justify-center">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGR5Mu4e2bD3IfC5r0wT_olS2mh2fYFfLYtA&s'
            alt="Logo"
            className="h-16 w-16 object-cover animate-zoomIn"
          />
        </div>

        <div className="mb-4">
            <div className='h-full w-full flex flex-col items-center'>
          <label className="block mb-2 text-black text-xl font-semibold">Sign up</label>
          <p className="text-xs mb-4 text-gray-600">Enter your valid email and password</p>
            </div>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 rounded-md text-base bg-white shadow-md focus:outline-none focus:ring-0 transition-all duration-300 hover:shadow-lg focus:scale-[1.02]"
          />
        </div>

        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 rounded-md text-base bg-white shadow-md focus:outline-none focus:ring-0 transition-all duration-300 hover:shadow-lg focus:scale-[1.02]"
          />
        </div>

        <div className="mb-6">
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 rounded-md text-base bg-white shadow-md focus:outline-none focus:ring-0 transition-all duration-300 hover:shadow-lg focus:scale-[1.02]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#0d0d0deb] text-white rounded-md text-lg font-bold transition-transform duration-300 hover:scale-105"
        >
          Create Account
        </button>

        <div className="flex items-center h-12 text-sm justify-center mt-2">
          <Link to="/users/login" className="hover:underline cursor-pointer ">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
