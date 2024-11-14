import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <DotLottieReact
      src="assets/loadingAnimation.json"
      className='h-/12 w-3/12'
      loop
      autoplay
    />
    </div>
  )
}

export default Loading