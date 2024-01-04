import React from "react";
import Image from "next/image";
import Link from "next/link";

const CheckEMail = () => {
  return (
    <div className="px-10 lg:px-20 lg:py-20 pb-36 flex justify-center lg:block items-center lg:pb-20">
      <div className="form w-[460px] px-5 py-20 lg:py-10 shadow-sm">
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
        <div className="pt-7  text-center">
          <div className="flex justify-center items-center py-6">
            <Image
              width={40}
              height={20}
              src="/assets/icons/emailIcon.svg"
              className="w-[56px] h-[56px]  cursor-pointer"
              alt="logo"
            />
          </div>
          <h3 className="text-[#333] font-semibold lg:text-3xl text-2xl">
            Check your email
          </h3>
          <p className="py-3">open mail and reset password</p>
          <p className="lg:block flex flex-col pt-2 text-center lg:text-sm text-xs ">
            Didn’t receive the email?
            <Link href="/">
              <span className="text-[#3230F5] font-semibold lg:ml-1">
                Click here to resend
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckEMail;
