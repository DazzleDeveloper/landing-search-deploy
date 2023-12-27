import React, { useEffect, useState } from "react";
import { get } from "../data/httpsRequest";
import { CardMovie } from "../components/CardMovie";
import { FaSearch } from "react-icons/fa";

export function ContextCardMovie() {
  const [Movies, setMovies] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    get("/discover/movie").then((datamovie) => {
      setMovies(datamovie.results);
    });
  }, []);

  const searchMovies = async (e) => {
    e.preventDefault();
  
    try {
      // Utilizamos el valor actualizado de Search
      const datamovie = await get(`/search/movie?query=${Search}`);
      setMovies(datamovie.results);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  console.log(setSearch)
    setSearch(""); // Limpiamos el campo después de realizar la búsqueda
  };
  
  

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <form
          onSubmit={(e) => searchMovies(e)}
          className="flex items-center justify-center"
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={Search} // Vincula el valor del input con el estado Search
            className="rounded-sm md:w-[400px] h-10 p-2 font-montserrat border-slate-300 text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            placeholder="Name of the movie..."
          />

          <button
            type="submit" // Añade este atributo para que el botón funcione dentro del formulario
            className="bg-indigo-700 text-white w-[114px] rounded-sm h-10 hover:bg-indigo-800 text-xs font-montserrat flex items-center justify-center ml-2 font-[500]"
          >
            Search{" "}
            <span>
              <FaSearch className="text-white ml-2" />
            </span>{" "}
          </button>
        </form>
      </div>
      <ul>
        {Movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
