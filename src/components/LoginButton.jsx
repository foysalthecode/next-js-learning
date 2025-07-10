"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="border border-white rounded-full p-2 px-4"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
