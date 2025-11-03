import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React  from 'react'

import App from './App.jsx'

function Khushi(){
  const username='Chai aur code '
  return (
    <>
      <h1>khushi jain dawaraa bangya function {username}</h1>
    </>
  )
}

/*
// ya vala syntax nhi hoo 
const another="chai ";
const ReactElement ={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'CLick me to the visit google'

}
// ya valaa syntax use kr sktaa 
const ReactElement2=React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},'click me to visit google',
  another
)

const anotherElement=(
  <a href="http://google.com" target="_blank">Visit Google</a>
)
*/

createRoot(document.getElementById('root')).render(
  // Khushi()
  //// ReactElement
  // ReactElement2
  // anotherElement

  <>
    <App />
    <Khushi/>
  </>


  // <StrictMode>
  // </StrictMode>,
)
