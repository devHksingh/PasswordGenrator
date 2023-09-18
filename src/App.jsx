import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center font-black text-4xl text bg-grayish-200 font-jetbrainsmono'>PassWord genrator</h1>
      <h1 className='text-center font-jetbrainsmono italic'>Lorem ipsum dolor sit amet consectetur.</h1>
    </>
  )
}

export default App
