import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="lg:p-[29px] p-2 w-full">
      <header className="flex w-full justify-between py-[20px] lg:px-[39px] px-[15px] border border-[#DBDBDB] rounded-[10px]">
        <Link href="/">
          <Image
            width={40}
            height={20}
            src="/assets/images/logo.svg"
            className="w-[135px] h-[42px] cursor-pointer"
            alt="logo"
            draggable="false"
          />
        </Link>
        <div className="flex gap-2">
          <Image
            width={40}
            height={20}
            src="/assets/icons/notificationsIcon.svg"
            className="cursor-pointer w-[27px] h-[32px]"
            alt="logo"
            draggable="false"
          />
          <Link href="/upload-document">
            <Image
              width={40}
              height={20}
              src="/assets/icons/basil_document-outline (1).svg"
              className="cursor-pointer w-[24px] h-[24px] mt-2"
              alt="logo"
              draggable="false"
            />
          </Link>
        </div>
      </header>
    </div>
  );
};
