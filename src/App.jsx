import { useCallback, useState,useEffect, useRef } from 'react'
import copyLogo from './assets/icon-copy.svg'
import checkLogo from './assets/icon-check.svg'
import arrow from './assets/icon-arrow-right.svg'



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
      
    {/* container */}
    <div className='w-full max-w-md h-screen max-h-md mx-auto font-jetbrainsmono font-bold  px-10 py-20 '>
      <h1 className='text-center text-grayish-200 text-xl italic mb-4'>Password Genrator</h1>
      
      <div>
        <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
        <div className="flex rounded-md shadow-sm">
            <input type="text" id="hs-trailing-button-add-on-with-icon"
             name="hs-trailing-button-add-on-with-icon" 
             className="py-3 px-4 block w-full border-none outline-none bg-grayish-700 shadow-sm rounded-l-md text-sm  focus:border-grayish-700  dark:text-gray-400"
             placeholder='Password'
             readOnly/>
             
            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold  text-white bg-grayish-700 hover:bg-slate-400  focus:outline-none  text-sm">
              <img src={copyLogo} className='bg-red ' alt="" />
            </button>
        </div>
      </div>

    </div>

    </>
  )
}

export default App
