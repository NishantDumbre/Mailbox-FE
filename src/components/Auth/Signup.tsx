import React from "react";
import { AuthPropsInterface } from "../../utils/interfaces/authInterfaces";

const Signup = ({ onSetPageType }: AuthPropsInterface) => {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold my-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 inline-block">Signup</h1>
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
        <input
          placeholder="Confirm password"
          type="password"
          className="w-full p-3 rounded-2xl my-3 block"
        />
        <button className="py-3 w-full shadow-lg rounded-2xl bg-cyan-400 my-3 hover:bg-cyan-500 active:shadow-none text-gray-100">
          Signup
        </button>
        <div className="flex items-center justify-center my-4">
          <div className="w-full border-t-2 border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
        <button
          className="py-3 w-full shadow-lg rounded-2xl bg-cyan-400 my-3 hover:bg-cyan-500 active:shadow-none text-gray-100"
          type="button"
          onClick={() => onSetPageType('LOGIN')}
        >
          Already have an account?
        </button>
      </form>
    </div>
  );
};

export default Signup;
