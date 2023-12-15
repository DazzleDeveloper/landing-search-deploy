import { FaArrowDown } from "react-icons/fa";

import { ContextCardMovie } from "../components/ContextCardMovie";


import { Home } from "./Home";
import {Footer} from './Footer'

export function LandingPage() {

 

  return (
    <>
      <Home />

    

     
     
      
      <ContextCardMovie />
      
      <a href="#fin"><span className="flex items-center justify-center bg-[#1E293B] w-[50px] h-[50px] rounded-full	fixed  right-7 bottom-7 lg:right-1/4 lg:bottom-[20px] border-solid  border-[2px] border-gray-700 animate-bounce  "  title="Click me">
     
     <FaArrowDown className="text-[#4338CA]   flex items-center justify-center h-[120px]  " />

     </span></a>

   <Footer/>

   
    </>
  );
}
