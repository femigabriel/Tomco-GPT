"use client";

import { Input } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../Layout";

interface Props {
  onNextClick: () => any;
}

export const Login = ({ onNextClick }: Props) => {
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
    onNextClick();
  };

  return (
    <Layout>
      <div className="flex justify-center lg:block lg:px-20 py-10">
        <div className="form w-[460px] px-5 py-7 shadow-sm">
          <div className="flex justify-center items-center">
            <Image
              width={40}
              height={20}
              src="/assets/images/logo.svg"
              className="w-[176px] h-[55px] cursor-pointer"
              alt="logo"
              draggable="false"
            />
          </div>
          <div className="py-7 text-center">
            <h3 className="text-[#333] font-semibold lg:text-3xl text-2xl">
              Welcome back
            </h3>
            <p className="py-3">Welcome back! Please enter your details.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-y-2 mb-5">
              <label
                htmlFor="name"
                className="text-sm font-semibold cursor-pointer"
              >
                Email
              </label>
              <Input
                className="w-full bg-transparent border border-[#D0D5DD] text-base rounded-lg outline-none input-field"
                placeholder="Enter your email"
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
            <div className="flex flex-col items-start gap-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold cursor-pointer"
              >
                Password
              </label>
              <Input.Password
                className="w-full bg-transparent border border-[#D0D5DD] text-base rounded-lg outline-none input-field"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                // pattern="^\S+@\S+\.\S+$"
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
            <div className="flex justify-between text-sm py-5">
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <span className="text-[#344054]  font-medium">
                  Remember for 30 days
                </span>
              </div>
              <Link href="/forget-password">
                <span className="text-[#3230F5] font-semibold">
                  Forgot password
                </span>
              </Link>
            </div>
            <div className="py-5">
              <button className=" bg-[#3230F5] text-white w-full p-[10px] px-[18px] rounded-[8px]">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
