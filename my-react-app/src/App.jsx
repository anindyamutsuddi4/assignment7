//import '@fontsource/inter/variable.css'; 
import { Suspense, useMemo, useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import Progress from './Components/Progress/Progress'
import Tasks from './Components/Tasks/Tasks'
import { ToastContainer } from 'react-toastify';
import Resolve from './Components/Resolve/Resolve'
import Footer from './Components/Footer/Footer'
function App() {

  const [pro, setpro] = useState([])
  const func = (x) => {
    if (!pro.find(p => p.id === x.id)) {
      setpro(xo => [...xo, x])
      // const setx = [...pro, x]
      // setpro(setx)
      // }
    }
  }
  const [mill, setmill] = useState([])
  const pillo = (x) => {
    const mi = [...mill, x]//resolve
    setmill(mi)
    const del = pro.filter(y => y.id !== x.id)
    setpro(del)


  }


  const [val, setval] = useState([])
  const dot = (x) => {
    const jo = [...val, x]
    setval(jo)
  }
  // const [val1,setval1]=useState([])
  //   const data1=(xo)=>{
  //    setval1(xo)}
  //   const data=(x)=>{
  //     const del = val1.filter(y => y.id !== x.id)
  //   setval(del)

  //     }


  const Fetched = useMemo(() => {
    return fetch("/data.json")
      .then(res => res.json())
  }, [])

  const [bill, setbill] = useState([])
  const billo = (x) => {
    const bi = [...bill, x]
    setbill(bi)
    //console.log("added to bill:", bi)
  }


  //   const pillo=(x)=>{
  //      const mi = [...mill, x]//resolve
  //     setmill(mi)

  // setbill(
  //     xo=>{
  //        console.log("bill before filter:", bill)
  //       const filter=xo.filter(p=>p.id!==x.id)
  //     console.log("bill after filter:", xo)
  //     setbill(xo)
  //     return filter}
  //      )
  //   }
  return (


    <>

      <Navbar></Navbar>
      <Progress bill={bill} pro={pro}></Progress>
      <div className='flex'>
        <Suspense fallback={<div>data is loading</div>
        }>
          <Cards val={val} func={func} Fetched={Fetched}></Cards></Suspense>

        <div className='flex flex-col'>
          {/* <Suspense fallback={<div>
            data is loading
          </div>}>  */}
          <Tasks dot={dot} pillo={pillo} billo={billo} pro={pro}></Tasks>
          {/* </Suspense> */}
          <Resolve mill={mill}></Resolve>
        </div>


      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App