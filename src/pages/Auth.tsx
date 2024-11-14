import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import ForgotPwd from "../components/Auth/ForgotPwd";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoginFormValuesInterface,
  SignupFormValuesInterface,
  ForgotPwdFormValuesInterface,
} from "../utils/interfaces/authInterfaces";

const Auth = () => {
  const [pageType, setPageType] = useState("LOGIN");

  const loginForm = useForm<LoginFormValuesInterface>();
  const signupForm = useForm<SignupFormValuesInterface>();
  const forgotPwdForm = useForm<ForgotPwdFormValuesInterface>();

  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="p-5 bg-blue-100 w-6/12 rounded-3xl shadow-lg">
        <div className="bg-inherit w-full flex flex-row relative">
          <Login onSetPageType={setPageType} form={loginForm} />
          <Signup onSetPageType={setPageType} form={signupForm} />
          <motion.div
            initial={{
              x: pageType === "SIGNUP" ? "0%" : "100%",
              width: pageType === "FORGOT-PWD" ? "100%" : "50%",
              height: pageType === "FORGOT-PWD" ? "100%" : "auto",
            }}
            animate={{
              x: pageType === "LOGIN" ? "100%" : "0%",
              width: pageType === "FORGOT-PWD" ? "100%" : "50%",
              height: pageType === "FORGOT-PWD" ? "100%" : "auto",
            }}
            transition={{ duration: 0.2 }}
            className={`min-h-full p-5 z-10 absolute rounded-3xl ${
              pageType === "FORGOT-PWD"
                ? "bg-blue-100 w-full"
                : "bg-gradient-to-bl from-gray-100 to-cyan-300"
            }`}
          >
            {pageType === "FORGOT-PWD" && (
              <ForgotPwd onSetPageType={setPageType} form={forgotPwdForm} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
