import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload, message, Modal } from "antd";
import type { UploadFile } from "antd/es/upload/interface";

export const UploadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Upload
  //   const props: UploadProps = {
  //     name: "file",
  //     action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //     headers: {
  //       authorization: "authorization-text",
  //     },
  //     onChange(info) {
  //       if (info.file.status !== "uploading") {
  //         console.log(info.file, info.fileList);
  //       }
  //       if (info.file.status === "done") {
  //         message.success(`${info.file.name} file uploaded successfully`);
  //       } else if (info.file.status === "error") {
  //         message.error(`${info.file.name} file upload failed.`);
  //       }
  //     },
  //   };

  const fileList: UploadFile[] = [];

  return (
    <div className="w-full">
      <button className="btn-upload flex gap-2 h-[44px]" onClick={showModal}>
        <Image
          width={40}
          height={20}
          src="/assets/icons/bx_upload.svg"
          className="cursor-pointer w-[20px] h-[20px]"
          alt="logo"
          draggable="false"
        />
        <span className="text text-sm"> Upload file</span>
      </button>
      <Modal
        // title="Basic Modal"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <div>
          <div className=" justify-center py-7">
            <div className="div">
              <div className="pb-5">
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture"
                  defaultFileList={[...fileList]}
                >
                  <div className="flex justify-center">
                    <div className="flex flex-col">
                      <div className="flex justify-center py-3">
                        <Image
                          width={40}
                          height={20}
                          src="/assets/icons/Featured icon (30).svg"
                          className="cursor-pointer w-[40px] h-[40px]"
                          alt="logo"
                          draggable="false"
                        />
                      </div>
                      <div className="">
                        <p className="text-[#475467] text-sm font-medium">
                          <span className="text-[#4166C6]">
                            Click to upload
                          </span>
                          or drag and drop <br />
                          PDF, DOC, JPG or XLSX (max. 2GB)
                        </p>
                      </div>
                    </div>
                  </div>
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
