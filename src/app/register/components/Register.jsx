"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const Resister = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const payload = { username, password };
    // console.log("payload", payload);
    const result = await registerUser(payload);
    console.log(result);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleRegister} className="flex flex-col items-center">
        <label htmlFor="User name">User name</label>
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          className="border border-white p-2 rounded-lg"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          className="border border-white p-2 rounded-lg"
        />
        <button
          type="submit"
          className="border border-white p-2 rounded-lg my-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Resister;
