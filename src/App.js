// import React, { useState, use} from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './App.css';

function App() {

  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  
  // const fetchQuote = async() =>{
  //   const res = await axios.get('https://api.adviceslip.com/advice')

  //   const ad = (res.data.slip.advice);
  //   setAdvice(ad);
  // }

  // useEffect(async() => {
  //   const res = await axios.get('https://api.adviceslip.com/advice')
  //   const ad = (res.data.slip.advice);
  //   setAdvice(ad);

  // }, [count, advice])
 
  useEffect(()=>{
    async function fetchData()
    {
      const res = await axios.get('https://api.adviceslip.com/advice')
      const ad = (res.data.slip.advice);
      setAdvice(ad);      
    }
    fetchData();
  }, [advice, count]);


  return (


    

    <div className="app">

      <div className="card">
        <h3 className="heading">
        {advice}
        </h3>
        <button className="button" onClick={ () => setCount(count +1)}> 
          <span>
            Generate </span>
        </button>
      </div>
    </div>

  );
}

export default App;
