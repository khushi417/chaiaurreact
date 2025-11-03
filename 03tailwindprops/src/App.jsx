import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let Myobject={
    username:"HItesh",
    age:21
  }
  let newaray=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>TailWindCss Test</h1> 
      <Card channel="chaiaurcode" someobject={Myobject} secondobject={newaray} />  
      <Card username="chaiaurbiskit" btntext="visit me"/>
      
   
  </>
  )
}

export default App
