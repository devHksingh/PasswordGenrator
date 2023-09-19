import { useCallback, useState,useEffect, useRef } from 'react'

// import './App.css'

function App() {
  const [length,setLength] = useState(6);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [upperCharAllowed,setUpperCharAllowed] = useState(false)
  const [lowerCharAllowed,setLowerCharPassword] = useState(false)
  const [symbolsAllowed,setSymbolsAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  //callback

  const passwordGenerator = useCallback(()=>{

    let pass =""
    let str =""

    if(numberAllowed) str+="0123456789"
    if(upperCharAllowed) str+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lowerCharAllowed) str+= "abcdefghijklmnopqrstuvwxyz"
    if(symbolsAllowed) str+=  "~!@#$%&*()_+*?"

    for (let i = 0; i <= length; i++) {
      let indexValue = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(indexValue)
      
    }

    setPassword(pass)

  },[length,numberAllowed,upperCharAllowed,lowerCharAllowed,symbolsAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
      password.current?.select()
      password.current?.setSelectionRange(0,40)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,upperCharAllowed,lowerCharAllowed,symbolsAllowed,passwordGenerator])

  return (
    <>
      
    </>
  )
}

export default App
