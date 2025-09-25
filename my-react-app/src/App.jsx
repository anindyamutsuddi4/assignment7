//import '@fontsource/inter/variable.css'; 
import { Suspense } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import Progress from './Components/Progress/Progress'
import Tasks from './Components/Tasks/Tasks'

function App() {
const Fetched=fetch("/data.json")
.then(res=>res.json())

  return (
    <>

      <Navbar></Navbar>
      <Progress></Progress>
      <div className='flex'>
        <Suspense fallback={<div>data is loading</div>
          }> 
          <Cards Fetched={Fetched}></Cards></Suspense>
       
        <Tasks></Tasks>

      </div>

    </>
  )
}

export default App
