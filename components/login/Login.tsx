"use client";

import { Input } from "antd";
import React, { useState } from "react";
// import Input from '../global/Input'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!password || !email) {
      setError(true);
      return;
    }
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="sha shadow-md w-[650px] h-[650px] px-10 py-7 bg-white rounded-md">
        <div className="text-center text-[1.5em] text-blue-400">Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-y-3">
            <label
              htmlFor="name"
              className="text-sm font-medium cursor-pointer"
            >
              Email
            </label>
            <Input
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="e.g johndoe@lorem.com"
              onChange={(e) => setEmail(e.target.value)}
              pattern="^\S+@\S+\.\S+$"
              type="email"
            />
            {error && email.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col items-start gap-y-3">
            <label
              htmlFor="name"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <Input
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="e.g johndoe@lorem.com"
              onChange={(e) => setEmail(e.target.value)}
              pattern="^\S+@\S+\.\S+$"
              type="email"
            />
            {error && password.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="pt-20">
            <button className=" bg-blue-950 text-white float-right p-2 px-5 rounded-md">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
