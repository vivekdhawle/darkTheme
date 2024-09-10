import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContextProvider } from './context/themeContext'
import { useEffect } from 'react'

function App() {
  const [themeMode, setthemeMode] = useState('light')
  const darkTheme=()=>{
    setthemeMode("dark")
  }
  const lightTheme=()=>{
    setthemeMode("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark","weava-extension-context")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  const themeSwitch=()=>{
      if(themeMode=='light'){
        darkTheme()
      }
      else{
        lightTheme()
      }
  }

  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
      <main className='h-screen w-full flex justify-center items-center dark:bg-gray-950 dark:duration-200 duration-200'>
        <div className='bg-white shadow-lg border-2 w-1/4  flex-col box-border p-10 flex-wrap dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:shadow-gray-800 '>
              <button className='rounded-full  h-5 w-5 border-4 border-black  relative  left-3/4  mb-5 dark:border-white ' onClick={(e)=>(e.preventDefault(),themeSwitch())} ></button>
              <div className='font-bold text-2xl mb-8'>Context-Api/TailWind /Light-Dark mode</div>
              <div className='font-mono text-sm mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eveniet illo! Ullam error odit temporibus reprehenderit culpa ut omnis quia iusto accusantium animi nemo id, nobis est deserunt? Facere, consectetur.</div>
              <div className='flex  justify-end '><button className='  bg-blue-800 hover:bg-blue-900 w-1/3 p-1 px-2 rounded-md border-2 hover:border-black  hover:border-3 mt-12' checked={themeMode==="dark"} onClick={(e)=>(e.preventDefault())}>Learn more</button></div>
        </div>
      </main>
    </ThemeContextProvider>
  )
}

export default App
