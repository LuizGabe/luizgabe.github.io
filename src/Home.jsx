import React, { useEffect, useState } from "react"
import Lottie2 from 'react-lottie';
import confetti from './assets/lotties/confetti.json';
import { useFormats } from "./utils/useFormats";

const Home = () => {

  const [animateStatus, setAnimateStatus] = useState(true)
  const [input, setInput] = useState('')
  const { removeAcentos, PrimeiraLetraMaiuscula, fraseLetraMaiuscula } = useFormats()

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  useEffect(() => {}, [animateStatus]); 

  const retorno = removeAcentos(input)

  return (
    <>
    <input 
      type="text"
      onChange={(e) => {setInput(e.target.value)}} 
    />
    <h1>{fraseLetraMaiuscula(retorno)}</h1>
    
    {
      true ? 
        <Lottie2 
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
