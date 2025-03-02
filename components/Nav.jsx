const Nav = ({ setRestart, setReset, setTime }) => {
  return (
    <div className="flex gap-20">
      <div className="flex w-full mt-10 text-yellow-500  font-bold items-center text-4xl  ">
        {/* <img src="/logo.png" alt="Logo" className="h-10 mr-2" /> */}
        Monkey <span className="text-white hover:text-yellow-500 underline hover:underline-none">Typing...</span>
      </div>
      <div className="bg-black text-lg text-white px-10 p-3 rounded-lg flex justify-center items-center gap-10 mt-10">
        <div className="flex justify-center items-center gap-10">
          <button onClick={() => setRestart((prev) => !prev)} className="cursor-pointer hover:font-bold">Restart</button>
          <button onClick={() => setReset((prev) => !prev)} className="cursor-pointer hover:font-bold">Reset</button>
        </div>
        <div>|</div>
        <div className="flex justify-center items-center gap-2">
          <p>Time:</p>
          <div className="flex justify-center items-center gap-5">
            <button className="cursor-pointer hover:font-bold" onClick={() => setTime(30)}>30s</button>
            <button className="cursor-pointer hover:font-bold" onClick={() => setTime(60)}>60s</button>
            <button className="cursor-pointer hover:font-bold" onClick={() => setTime(120)}>120s</button>
            <button className="cursor-pointer hover:font-bold" onClick={() => setTime(180)}>180s</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;