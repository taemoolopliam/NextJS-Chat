import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chat() {
  const [isOpen, setisOpen] = useState(false);

  function FormChat() {
    return (
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
        <div className=" bg-white w-96 drop-shadow-md rounded-b-lg">
          <div className=" bg-blue-600  flex items-center   p-3 text-white font-medium rounded-t-lg">
            <div className="grow text-center ">Demo Live Chat</div>
            <div className="flex-none">
              <div
                className="p-1 hover:bg-blue-500 rounded-md hover:cursor-pointer  "
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </div>
            </div>
          </div>
          <ContentRegisChat />
        </div>
      </motion.div>
    );
  }

  function ContentRegisChat() {
    return (
      <>
        <div className="px-5 pt-5">
          <b>*โปรดใส่ชื่อและอีเมลของคุณเพื่อเริ่มคุยกับเรา</b>
          <div className="from-group">
            <label htmlFor="email">อีเมล</label>
            <input type="email" id="email" />
          </div>
          <div className="from-group">
            <label htmlFor="name">ชื่อ</label>
            <input type="text" id="name" />
          </div>
          <div className="from-group">
            <label htmlFor="categoryID">ท่านต้องการติดต่อเจ้าหน้าที่เรื่องใด</label>
            <select name="categoryID" id="categoryID" defaultValue="01">
              <option value="01">อื่นๆ</option>
              <option value="02">ติดต่อสอบถามใช้งานระบบ</option>
              <option value="03">รายงานปัญหา</option>
              <option value="04">ติดตามสถานะยืนยันตัวตน</option>
              <option value="05">แจ้งลบบัญชีผู้ใช้งาน</option>
            </select>
          </div>
          <div className="from-group">
            <label htmlFor="messages">ข้อความ</label>
            <textarea name="messages" id="messages" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className="p-2 flex justify-end items-center ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
          >
            เริ่มต้นการแชท
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bottom-0 right-0 fixed   z-20 m-5 ">
        {isOpen ? (
          <FormChat />
        ) : (
          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none  flex justify-center gap-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            ช่วยเหลือ
          </button>
        )}
      </div>
    </>
  );
}
