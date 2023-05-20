
import './App.css'
import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from '@/shared/Types';
import Home from './scenes/home/Index';


function App() {
  const [selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setisTopOfPage]= useState<boolean>(true)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setisTopOfPage(true)

        setSelectedPage(SelectedPage.Home)
      } 
      if(window.scrollY !==0) setisTopOfPage(false)
      
    }
    window.addEventListener("scroll",handleScroll)
    return()=> window.removeEventListener("scroll", handleScroll)
   
  },[])


  return (
    <div className='app bg-gray-50'>
      <Navbar
      isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
        <Home/>
    </div>
  )
}

export default App
