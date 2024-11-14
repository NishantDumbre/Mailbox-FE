import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoadingPropsInterface } from "../utils/interfaces/homeInterfaces";

const Loading = ({ dimensions }:LoadingPropsInterface) => {
  return (
    <div className={`flex justify-center items-center ${dimensions} `}>
      <DotLottieReact
        src="assets/loadingAnimation.json"
        className="h-/12 w-3/12"
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
