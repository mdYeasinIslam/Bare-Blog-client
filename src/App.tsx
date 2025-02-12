
import { Toaster } from 'react-hot-toast'
import './App.css'
import Root from './Routes/Root'
import useContextHook from './Hooks/useContextHook'

function App() {
  const {darkMode} =useContextHook()

  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className='dark:bg-[#111827] bg-[#f1f5fa] dark:text-white'>
      <Root />
      <Toaster />
      </div>
    </div>
  )
}

export default App
