"use client";

import { Input } from "antd";
import React, { useState } from "react";
// import Input from '../global/Input'

export const Login = () => {
  const [firstAns, setfirstAns] = useState("");
  const [secondAns, setsecondAns] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!firstAns || firstAns.toLowerCase() !== "empathy") {
      setError(true);
      return;
    }
    if (!secondAns || secondAns.toLowerCase() !== "empathy") {
      setError(true);
      return;
    }
    // onNextClick();
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="sha shadow-md w-[650px] h-[650px] px-10 py-7 bg-white rounded-md">
        <div className="text-center text-[1.5em] text-blue-400">Sign In</div>
        <form action="">
          <div className="flex flex-col items-start gap-y-3">
            <label
              htmlFor="name"
              className="text-sm font-medium cursor-pointer"
            >
              Name
            </label>
            <Input
              type="text"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your name"
            />
          </div>
          <Input
            placeholder="Email"
            type="text"
            className="input-field bg-inherit px-5"
            // onChange={(e) => setfirstAns(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
