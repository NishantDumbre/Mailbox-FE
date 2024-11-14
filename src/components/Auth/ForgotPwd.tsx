import React from "react";
import { AuthPropsInterface, SignupFormValuesInterface } from "../../utils/interfaces/authInterfaces";
import { DevTool } from "@hookform/devtools";

const ForgotPwd = ({ onSetPageType, form }: AuthPropsInterface) => {
    const { register, handleSubmit, control, formState } = form;
    const {errors} = formState

  const onSubmit = (data:SignupFormValuesInterface) =>{
    console.log(data)
  }
    
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-1/2">
      <p className="text-3xl font-bold my-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 inline-block">
        Forgot Password?
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter email"
          type="email"
          className="w-full p-3 rounded-2xl my-3 block"
          id="forgotEmail"
          {...register("forgotEmail", {
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
        {errors.forgotEmail && ( <p className="text-red-700 text-sm mb-2">{String(errors.forgotEmail.message)}</p> )}
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
      <DevTool control={control} />
    </div>
  );
};

export default ForgotPwd;
