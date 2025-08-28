import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000"; // backend server

export default function Auth() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const res = await axios.post(`${API_URL}/register`, registerData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed!");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, loginData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Register Box */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-80 mb-6">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registerData.username}
          onChange={handleRegisterChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleRegisterChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleRegisterChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={register}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>

      {/* Login Box */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={login}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
