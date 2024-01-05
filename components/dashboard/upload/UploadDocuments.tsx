import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { UploadModal } from "./UploadModal";

export const UploadDocuments = () => {
  return (
    <div className="px-5">
      <h3 className="text-[#333] font-bold lg:text-3xl text-2xl py-5 pb-7">
        Uploaded documents
      </h3>
      <div className="flex justify-between w-full">
        <span></span>
        <div className="flex gap-3">
          {/* <button className="btn-upload flex gap-2 h-[44px]">
            <Image
              width={40}
              height={20}
              src="/assets/icons/bx_upload.svg"
              className="cursor-pointer w-[20px] h-[20px]"
              alt="logo"
              draggable="false"
            />
            <span className="text text-sm"> Upload file</span>
          </button> */}
          <UploadModal />
          <div>
            <Input
              placeholder="Search"
              className="px-[14px] py-[10px] h-[44px] lg:w-[320px] w-full"
              prefix={
                <Image
                  width={40}
                  height={20}
                  src="/assets/icons/search-lg (1).svg"
                  className="cursor-pointer w-[20px] h-[20px]"
                  alt="logo"
                  draggable="false"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
