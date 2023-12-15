/* import React, { useEffect, useState } from "react";
import { get } from "../data/httpsRequest";
import { CardTv } from "./CardTv";

export  function ContextCardTv() {
  const [Tv, setTv] = useState([]);

  useEffect(() => {
    get("/discover/tv").then((datatv) => {
      setTv(datatv.results);
      console.log(datatv);
    });
  }, []);

  return (
    <>
      <ul>
        {Tv.map((tv) => (
          <CardTv key={tv.id} tv={tv} />
        ))}
      </ul>
    </>
  );
} */
