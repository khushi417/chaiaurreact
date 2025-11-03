import { useState } from 'react'
import {useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setNumber]=useState(false)
  const [charallowed,setchar]=useState(false)

  const [password,setPassword]=useState("")
  const PasswordRef= useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnipqrstuvwxyz"
    if (numberallowed){
      str+="0123456789"
    }
    if(charallowed){
      str+="@#$%^&*[]{}_-+!"
    }

    for(let i=1; i<=length;i++){
      let char=Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)


  },[length,numberallowed,charallowed,setPassword])

  const copyPasswordtoClickboard= useCallback(()=>{
    PasswordRef.current?.select();
    // PasswordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{passwordGenerator()},[length,numberallowed,charallowed,passwordGenerator])
  
  
  
  // passwordGenerator()
  return (
    <>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-4 my-8 text-black bg-gray-500">
        <div className="flex shadow rounded-l-lg overflow-clip mb-4">
          <input type="text" value={password}  placeholder="password" className="outline-none w-full py-3 px-3 bg-white" ref={PasswordRef}/>
          <button onClick={copyPasswordtoClickboard} className=" text-white">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={30} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label>length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input type="checkbox" defaultChecked={numberallowed} id="NumberInout" onChange={()=>{setNumber((prev) => !prev)}}/>
            <label>Number</label>
            <input type="checkbox" defaultChecked={charallowed} id="charhinout" onChange={()=>{setchar((prev) => !prev)}}/>
            <label>Charachter</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
