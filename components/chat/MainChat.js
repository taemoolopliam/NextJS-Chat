export default function MainChat() {
  return (
    // <button className="bottom-0 right-0 fixed z-20 m-5   bg-green-700 text-white  rounded-md w-20 text-center p-1">
    //   ช่วยเหลือ
    // </button>
    <div className="bottom-0 right-0 fixed   z-20 m-5 ">
      <div className=" bg-white w-96 drop-shadow-md rounded-b-lg">
        <div className=" bg-blue-600  flex items-center   p-3 text-white font-medium rounded-t-lg">
          <div className="grow text-center ">Demo Live Chat</div>
          <div className="flex-none">
            <div className="p-1 hover:bg-blue-500 rounded-md hover:cursor-pointer  ">
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
      </div>
    </div>
  );
}
