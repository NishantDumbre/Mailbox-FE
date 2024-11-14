import React from "react";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../utils/store/configSlice";
import { FaList } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const toggleNavbarHandler = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className="w-screen h-[10%]  min-h-16 bg-slate-100 shadow-lg flex justify-between items-center">
      <div className="mx-10">
        <motion.button
          type="button"
          onClick={toggleNavbarHandler}
          className="p-3 rounded-full shadow-md active:shadow-none"
        >
          <FaList className="h-7 w-7 text-cyan-300" />
        </motion.button>
      </div>
      <div className="w-full">
        <form className="w-full  flex justify-center items-center">
          <input
            type="text"
            placeholder="Search emails"
            className="rounded-3xl p-3 w-2/4 border-2 border-solid"
          />
        </form>
      </div>
      <h1 className="mx-10">Hiasdaaaaaaaaaaaaaaaaaaaaaaaaaaaa!</h1>
    </div>
  );
};

export default Header;
