import React from "react";
import { AuthPropsInterface } from "../../utils/interfaces/authInterfaces";
import { Link } from "react-router-dom";

const Login = ({ onSetPageType }: AuthPropsInterface) => {
  return (
    <div className="flex-1 p-10">
      <p className="text-3xl font-bold my-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 inline-block">
        Login
      </p>
      <form>
        <input
          placeholder="Enter email"
          type="email"
          className="w-full p-3 rounded-2xl my-3 block"
        />
        <input
          placeholder="Enter password"
          type="password"
          className="w-full p-3 rounded-2xl my-3 block"
        />
        <button className="py-3 w-full shadow-lg rounded-2xl bg-cyan-400 my-3 hover:bg-cyan-500 active:shadow-none text-gray-100">
          Login
        </button>
        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t-2 border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
        <button
          className="py-3 w-full shadow-lg rounded-2xl bg-cyan-400 my-3 hover:bg-cyan-500 active:shadow-none text-gray-100"
          type="button"
          onClick={() => onSetPageType("SIGNUP")}
        >
          Create new account
        </button>

        <div className="my-5 text-center">
          <p
            className="text-cyan-700 hover:underline hover:text-cyan-500"
            onClick={() => onSetPageType("FORGOT-PWD")}
          >
            Forgot password?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
