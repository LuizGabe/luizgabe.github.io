import React, { useEffect, useState } from "react"
import Lottie from 'react-lottie';
import confetti from './assets/lotties/confetti.json';


const Home = () => {

  const [animateStatus, setAnimateStatus] = useState(true)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  useEffect(() => {
    console.log(animateStatus);
  }, [animateStatus]); 

  useEffect(() => {
    setTimeout(() => {
      setAnimateStatus(false)
    }, 1000);
  })

  return (
    <>
    {
      true ? 
        <Lottie 
        options={defaultOptions}
        height='100%'
        width='82.3%'
        isPaused={animateStatus}
      />
     : null
    }
    </>
  )
}

export default Home
