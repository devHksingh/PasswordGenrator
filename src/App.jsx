import { useCallback, useState,useEffect, useRef } from 'react'
import copyLogo from './assets/icon-copy.svg'
import checkLogo from './assets/icon-check.svg'
import arrow from './assets/icon-arrow-right.svg'



// import './App.css'

function App() {
  const [length,setLength] = useState(6);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [upperCharAllowed,setUpperCharAllowed] = useState(false)
  const [lowerCharAllowed,setLowerCharAllowed] = useState(false)
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

     {/* input field */}
      <div>
      
      <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
      <div className='flex rounded-md shadow-md'>

        <input type="text" 
        //  name="hs-trailing-button-add-on-with-icon"
         placeholder='Password'
         readOnly
         value={password}
         ref={passwordRef}
         className='w-full px-4 py-3 block rounded-l-md text-2xl 
         font-jetbrainsmono font-[950] border-grayish-700 outline-none bg-grayish-700
          focus:border-grayish-700 text-grayish-200 '
        />
        <button
         type='button'
         onClick={copyPasswordToClipboard}
         className='inline-flex flex-shrink-0 justify-center items-center bg-grayish-700 h-[3.55rem] w-[2.875rem] rounded-r-md border border-transparent font-extrabold cursor-pointer'
        >
          <svg width="21" height="24" className='fill-[#A4FFAF] hover:fill-blue-500' xmlns="http://www.w3.org/2000/svg">
          <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
          
        </button>

      </div>

      </div>
      
      {/* end input field */}

      {/* condition for password genrator */}


      <div className='px-4 py-3 mt-4 font-jetbrainsmono font-[950] bg-grayish-700'>

        <div className='flex justify-between'>
          <h2 className='text-lg text-gray-400'>Character Length</h2>
          <span className='text-lg text-[#A4FFAF]'>{length}</span>
        </div>
        <div className='mt-2'>
          <input type="range"
           name="" 
           id="" 
           min={6}
           max={44}
           value={length}
           className='cursor-pointer w-full accent-[#A4FFAF] bg-slate-950 range-lg rounded-lg '
           onChange={(e)=>{setLength(e.target.value)}}
           
           />
        </div>

        {/* checkbox */}
        <div className='text-gray-400 space-y-2 mt-4 accent-[#A4FFAF]'>
          <div>
            <input type="checkbox"
             defaultChecked={upperCharAllowed}
             id='upperChar'
             onChange={()=>{
              setUpperCharAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="upperChar" className='ml-6'>Include Uppercase Letters</label>
          </div>
          <div>
            <input type="checkbox"
             defaultChecked={lowerCharAllowed}
             id='lowerChar'
             onChange={()=>{
              setLowerCharAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="lowerChar" className='ml-6'>Include Lowercase Letters</label>
          </div>
          <div>
            <input type="checkbox"
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={()=>{
              setNumberAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="numberInput" className='ml-6'>Include Numbers</label>
          </div>
          <div>
            <input type="checkbox"
             defaultChecked={symbolsAllowed}
             id='symbolInput'
             onChange={()=>{
              setSymbolsAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="symbolInput" className='ml-6'>Include Symbols</label>
          </div>
        </div>
        {/* password strength */}

        <div className='bg-grayish-900  mt-4 w-full px-4 py-6  font-jetbrainsmono font-extrabold'>
             <div className='flex justify-between'>
              <h2 className='uppercase text-red-400'>Strength</h2>
              <div className='flex'>
                  <h1 className='uppercase text-white'>medium</h1>
                  <div className='flex justify-end w-full ml-6'>
                    <div className='h-5 w-2 bg-white mr-2'></div>
                    <div className='h-5 w-2 bg-white mr-2'></div>
                    <div className='h-5 w-2 bg-white mr-2'></div>
                    <div className='h-5 w-2 bg-white '></div>
                  </div>
              </div>
             </div>
        </div>

        {/* CTA btn */}
        <button className='uppercase bg-green-apple flex justify-center w-full mt-4 px-4 py-4 rounded-xl hover:bg-blue-400 hover:text-white hover:fill-white '>
              Generate <svg width="12" height="12" className='ml-4' xmlns="http://www.w3.org/2000/svg"><path  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
        </button>

      </div>


    </div>

    </>
  )
}

export default App
