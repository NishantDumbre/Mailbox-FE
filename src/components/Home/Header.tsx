import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-[10%]  min-h-16 bg-slate-100 shadow-lg flex justify-between items-center">
      <div className="mx-10">
        <button>NavOpen</button>
      </div>
      <div className="w-full">
        <form className="w-full  flex justify-center items-center">
          <input type="text" placeholder="Search emails" className="rounded-3xl p-3 w-2/4 border-2 border-solid" />
        </form>
      </div>
      <h1 className="mx-10">Hiasdaaaaaaaaaaaaaaaaaaaaaaaaaaaa!</h1>
    </div>
  );
};

export default Header;
