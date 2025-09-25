//import '@fontsource/inter/variable.css'; 
import { Suspense, useMemo, useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import Progress from './Components/Progress/Progress'
import Tasks from './Components/Tasks/Tasks'
import { ToastContainer } from 'react-toastify';
import Resolve from './Components/Resolve/Resolve'
function App() {
  // const Fetched=fetch("/data.json")
  // .then(res=>res.json())

  const [pro, setpro] = useState([])
  const func = (x) => {
    const setx = [...pro, x]
    setpro(setx)
  }

  const Fetched = useMemo(() => {
    return fetch("/data.json")
      .then(res => res.json())
  }, [])

  const [bill,setbill]=useState([])
  const billo=(x)=>{
    const bi=[...bill,x]
    setbill(bi)
  }
  return (


    <>

      <Navbar></Navbar>
      <Progress bill={bill} pro={pro}></Progress>
      <div className='flex'>
        <Suspense fallback={<div>data is loading</div>
        }>
          <Cards func={func} Fetched={Fetched}></Cards></Suspense>

        <div className='flex flex-col'>
          <Suspense fallback={<div>
            data is loading
          </div>}> <Tasks billo={billo} pro={pro}></Tasks></Suspense>
          <Resolve bill={bill}></Resolve>
        </div>


      </div>
      <ToastContainer />
    </>
  )
}

export default App
