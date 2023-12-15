/* import { FaArrowRight  } from "react-icons/fa";
export  function CardTv({tv}) {

  const imgUrlserie = 'https://image.tmdb.org/t/p/w200'+tv.poster_path;

  return (
    <>
       <li className="flex items-center flex-wrap flex-auto justify-center mt-10 ">
      <div className="flex justify-center "><a href="" className="mx-5">
        {" "}
        <img
          className="rounded-2xl  hover:translate-y-[-6px] transition-all duration-500 ease-in-out]	 "
          src={imgUrlserie}
          alt={tv.name}
          title={tv.name}
        />
      </a>
      <div className="">
        <h1 className="text-white text-start text-2xl font-[700] font-montserrat max-w-xs  ">
          {tv.name}
        </h1>

        <p className="text-white max-w-xs mt-2 text-xs font-montserrat">{tv.overview}</p>
        <button className="bg-indigo-600 hover:bg-indigo-800 rounded-sm w-28 h-8 text-white font-montserrat font-[500] text-xs flex justify-center items-center mt-5 hover:translate-x-2 duration-300" >
          Ver película
          <FaArrowRight className="ml-2 "/>
          
        </button>
      </div></div>
      
    </li>
    </>
  )
} */
