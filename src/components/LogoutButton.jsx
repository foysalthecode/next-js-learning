"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="border border-white rounded-full p-2 px-4"
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
