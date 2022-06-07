export default function MainChat() {
  return (
    // <button className="bottom-0 right-0 fixed z-20 m-5   bg-green-700 text-white  rounded-md w-20 text-center p-1">
    //   ช่วยเหลือ
    // </button>
    <div className="bottom-0 right-0 fixed   z-20 m-5 ">
      <div className=" bg-white w-96 drop-shadow-md">
        <div className=" bg-green-700 text-center p-2 text-white font-medium rounded-t-lg">Demo Live Chat</div>
        <div className="p-5">
          <label htmlFor="email">อีเมล</label>
          <input type="text" id="email" />
        </div>
      </div>
    </div>
  );
}
