import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div id="fin" className="flex justify-center items-center mt-10 mb-10 ">
      <div className="flex justify-center items-center  border border-solid rounded-lg  px-[40px] ">
        <div className="  gap-4  mt-10 mb-10 place-items-center flex-wrap flex items-center justify-evenly		   ">
          <div
            className="flex  
    "
          >
            <h1 className="text-white font-montserrat 	text-xs	">
              © 2020 Thaks you for watching, Inc. All rights reserved.
            </h1>
          </div>
          <div
            className=" flex justify-center items-center gap-3 
    "
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brunovelasquezdev



"
            >
              <i>
                <FaLinkedin className=" text-white text-2xl	 flex items-center justify-center hover:text-indigo-600 transition ease-in-out delay-70  hover:-translate-y-1 hover:scale-110  duration-300 ... hover:drop-shadow-sm" />
              </i>
            </a>
            
           <a target="_blank" href="https://github.com/DazzleDeveloper"> <i>
              <FaGithub className="text-white text-2xl	 flex items-center justify-center hover:text-indigo-600 transition ease-in-out delay-70  hover:-translate-y-1 hover:scale-110  duration-300 ... hover:drop-shadow-sm" />
            </i></a>
           
          </div>
        </div>
      </div>
    </div>

    /*  <div id="fin" className="mt-10 max-w-xl flex inset-0 m-auto bg-[#0C0D0F] ">
      <div className="flex items-center justify-center">
      <h1 className="text-white text-[60px] font-montserrat  text-center text-6xl font-black ">
        Follow to:
      </h1>
      
     <div className="ml-5">
     <div className="border-solid rounded-full border-2 w-[35px] h-[35px]  flex items-center justify-center bg-white">
        <FaTwitter className="text-black  h-[18px] w-[18px] "  />

      </div>
      
     </div>



     <div className="ml-5">
     <div className="border-solid rounded-full border-2 w-[35px] h-[35px]  flex items-center justify-center bg-white">
        <FaFacebookF className="text-black  h-[18px] w-[18px] "  />

      </div>
      
     </div>

     <div className="ml-5">
     <div className="border-solid rounded-full border-2 w-[35px] h-[35px]  flex items-center justify-center bg-white">
        <FaLinkedinIn className="text-black  h-[18px] w-[18px] "  />

      </div>
      
     </div>


     
      
      </div>
    </div>*/
  );
}
