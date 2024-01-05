import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { UploadModal } from "./UploadModal";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: any;
  date: any;
  upload: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: (
      <div className="flex ">
        <span>Document name</span>
        <Image
          width={40}
          height={20}
          src="/assets/icons/arrow-down.svg"
          className="cursor-pointer w-[16px] h-[16px] ml-2 mt-1"
          alt="logo"
          draggable="false"
        />
      </div>
    ),
    dataIndex: "name",
  },
  {
    title: "Date Uploaded",
    dataIndex: "date",
  },
  {
    title: "Uploaded By",
    dataIndex: "upload",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: (
      <div className="flex gap-3">
        <Image
          width={40}
          height={20}
          src="/assets/images/documentTypesIcon.svg"
          className="w-[40px] h-[40px] cursor-pointer"
          alt="avatar"
          draggable="false"
        />
        <p className="text-[#101828] font-medium">Example.Doc.Name</p>
      </div>
    ),
    date: <p className="text-[#475467]">20 Jan 2022</p>,
    // upload: `London, Park Lane no. ${i}`,
    upload: (
      <div className="flex gap-5">
        <Image
          width={40}
          height={20}
          src="/assets/images/avatar.svg"
          className="w-[40px] h-[40px] cursor-pointer"
          alt="avatar"
          draggable="false"
        />
        <p className="mt-3 text-[#101828] font-medium">Samuel Jackson</p>
      </div>
    ),
  });
}

export const UploadDocuments = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

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
      {/* <div className="w-full my-5">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div> */}
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};
