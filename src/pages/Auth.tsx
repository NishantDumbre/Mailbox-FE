import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { motion } from "framer-motion";
import ForgotPwd from "../components/Auth/ForgotPwd";

const Auth = () => {
  const [pageType, setPageType] = useState("LOGIN");

  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <div className="p-5 bg-blue-100 w-6/12 rounded-3xl shadow-lg">
        <div className="bg-inherit w-full flex flex-row relative">
          <Login onSetPageType={setPageType} />
          <Signup onSetPageType={setPageType} />
          <motion.div
            initial={{ x: pageType === "SIGNUP" ? "0%" : "100%", width: pageType === "FORGOT-PWD" ? "100%" : "50%", height: pageType === "FORGOT-PWD" ? "100%" : "auto" }}
            animate={{ x: pageType === "LOGIN" ? "100%" : "0%", width: pageType === "FORGOT-PWD" ? "100%" : "50%", height: pageType === "FORGOT-PWD" ? "100%" : "auto" }}
            transition={{ duration: 0.2 }}
            className={`min-h-full p-5 z-10 absolute rounded-3xl ${pageType === "FORGOT-PWD" ? "bg-blue-100 w-full" : "bg-gradient-to-bl from-gray-100 to-cyan-300"}`}
          >
            {pageType === "FORGOT-PWD" && (
              <ForgotPwd onSetPageType={setPageType} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
