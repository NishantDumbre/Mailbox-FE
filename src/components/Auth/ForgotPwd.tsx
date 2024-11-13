import React from "react";
import { Link } from "react-router-dom";
import { AuthPropsInterface } from "../../utils/interfaces/authInterfaces";

const ForgotPwd = ({ onSetPageType }: AuthPropsInterface) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-1/2">
      <p className="text-3xl font-bold my-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 inline-block">
        Forgot Password?
      </p>
      <form>
        <input
          placeholder="Enter email"
          type="email"
          className="w-full p-3 rounded-2xl my-3 block"
        />
        <button className="py-3 w-full shadow-lg rounded-2xl bg-cyan-400 my-3 hover:bg-cyan-500 active:shadow-none text-gray-100">
          Send reset email
        </button>
        <div className="my-5 text-center">
          <p
            className="text-cyan-700 hover:underline hover:text-cyan-500"
            onClick={() => onSetPageType("Signup")}
          >
            Create new account
          </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ForgotPwd;
