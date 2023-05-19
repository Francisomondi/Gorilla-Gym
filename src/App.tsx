
import './App.css'
import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from '@/shared/Types';


function App() {
  const [selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setisTopOfPage]= useState<boolean>(true)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setisTopOfPage(true)

        setSelectedPage(SelectedPage.Home)
      } 
    }
   
  })


  return (
    <div className='app bg-gray-50'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
