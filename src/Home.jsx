import React from "react"
import Lottie from 'react-lottie';
import animationData from './assets/lotties/confetti.json';


const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
    <div className="teste">
      <Lottie 
	      options={defaultOptions}
        height={'100%'}
        width={'34%'}
      />
      </div>
    </>
  )
}

export default Home
