import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCounter(){
      setCount(prevVal => {
        if(prevVal<20){
         return ++prevVal
        }
        return prevVal
      })
  }

  function decreaseCounter() {
    setCount((prevVal => {
      if(prevVal>0){
        return --prevVal
      }
      return prevVal
    }))
   }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value : { count }</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}

export default App
