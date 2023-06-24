import React, { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [advice, setAdvice] = useState(null)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      setAdvice(data.slip.advice)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleClick () {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      setAdvice(data.slip.advice)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="app">
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={handleClick}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
