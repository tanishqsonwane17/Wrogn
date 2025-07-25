import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Custom animation styles

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login (since backend not connected)
    localStorage.setItem("authToken", "dummyToken123");
    localStorage.setItem("userId", "dummyUserId123");
    navigate('/product/delivery');
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

        <div className="mb-4 text-center">
          <label className="block mb-1 text-black text-xl font-semibold">
            Sign in
          </label>
          <p className="text-xs text-gray-600">
            Enter your valid email and password
          </p>
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
          Sign in
        </button>

        <div className="flex items-center justify-center h-12 text-sm mt-2">
          <Link to="/users/signup" className="hover:underline cursor-pointer">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
