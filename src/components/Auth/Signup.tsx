import React from "react";
import { AuthPropsInterface } from "../../utils/interfaces/authInterfaces";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { SIGNUP_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const Signup = ({ onSetPageType, form }: AuthPropsInterface) => {
  const { register, handleSubmit, control, formState, watch } = form;
  const { errors } = formState;
  const password = watch("signupPassword");

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(SIGNUP_URL, data);
      toast.success(response.data?.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold my-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 inline-block">
        Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          placeholder="Enter email"
          type="email"
          className="w-full p-3 rounded-2xl my-3 block"
          id="signupEmail"
          {...register("signupEmail", {
            required: {
              value: true,
              message: "Please enter email",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.signupEmail && (
          <p className="text-red-700 text-sm mb-2">
            {String(errors.signupEmail.message)}
          </p>
        )}
        <input
          placeholder="Enter password"
          type="password"
          className="w-full p-3 rounded-2xl my-3 block"
          id="signupPassword"
          {...register("signupPassword", {
            required: {
              value: true,
              message: "Please enter password",
            },
            minLength: {
              value: 6,
              message: "Password must be atleast 6 chars long",
            },
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
        {errors.signupPassword && (
          <p className="text-red-700 text-sm mb-2">
            {String(errors.signupPassword.message)}
          </p>
        )}
        <input
          placeholder="Confirm password"
          type="password"
          className="w-full p-3 rounded-2xl my-3 block"
          id="signupConfirmPassword"
          {...register("signupConfirmPassword", {
            required: {
              value: true,
              message: "Please confirm password",
            },
          })}
        />
        {errors.signupConfirmPassword && (
          <p className="text-red-700 text-sm">
            {String(errors.signupConfirmPassword.message)}
          </p>
        )}
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
          onClick={() => onSetPageType("LOGIN")}
        >
          Already have an account?
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Signup;
