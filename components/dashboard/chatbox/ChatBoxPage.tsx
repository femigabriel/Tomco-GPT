import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { Layout } from "../layout/Layout";

interface Props {
  onNextClick: () => any;
}

export const ChatBoxPage = () => {
  return (
    <Layout>
      <div className=" w-full">
        <ChatBoxPageInner />
        <div className="flex justify-center items-center py-7">
          <Input
            placeholder="Write your text and tell the AI what to do"
            className="px-[19px] pl-[25px] py-[19px] lg:w-[840px] w-full lg:h-[67px] text-[#A3A3A3] text-sm"
            suffix={
              <Image
                width={40}
                height={20}
                src="/assets/icons/downloadIcon.svg"
                className="cursor-pointer w-[30px] h-[30px]"
                alt="logo"
                draggable="false"
              />
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export const ChatBoxPageInner = () => {
  return (
    <div className="w-full flex justify-center text-center">
      <div className="">
        <div className="py-7 pb-12 ">
          <div className="div">
            <h3 className="text-[#333] font-semibold lg:text-3xl text-2xl ">
              Next Generation AI Assistant
            </h3>
            <p className="py-3 text-base text-[#A3A3A3]">
              Get started with new modern AI that helps you with every
              <br /> single prompt and even more...
            </p>
          </div>
        </div>
        <div className="px-60  flex justify-center">
          <div className="w-full">
            <div className="flex justify-between lg:max-w-[650px] lg:mx-16 w-full my-10">
              <Image
                width={40}
                height={20}
                src="/assets/images/Frame 73.svg"
                className="cursor-pointer w-[58px] h-[54px]"
                alt="logo"
                draggable="false"
              />

              <Image
                width={40}
                height={20}
                src="/assets/images/Frame 74.svg"
                className="cursor-pointer w-[68px] h-[54px]"
                alt="logo"
                draggable="false"
              />

              <Image
                width={40}
                height={20}
                src="/assets/images/Frame 75.svg"
                className="cursor-pointer w-[58px] h-[54px]"
                alt="logo"
                draggable="false"
              />
            </div>
            <div className="lg:flex gap-5">
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm">
                  Identify speakers on the last meeting in Google Meet →
                </p>
              </div>
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm ">
                  Allows user to transcript his virtual meetings
                </p>
              </div>
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm ">
                  Lorem ipsum text will be placed here for now
                </p>
              </div>
            </div>
            <div className="lg:flex gap-5">
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm ">
                  Identify speakers on the last meeting in MS Team →
                </p>
              </div>
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm ">
                  Trained to detect important keywords
                </p>
              </div>
              <div className="bg-[#F8F8FA] cursor-pointer rounded-[10px] mb-5 border-x-0 border-b-0 border-2 border-[#E7E7E7] w-[250.667px] py-[20px] px-[24px]">
                <p className="text-[#919191] text-sm ">
                  Allows user to transcript his virtual meetings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
