import React from "react";
import { useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";
import FavouritePokemonCard from "./FavouritePokemonCard";



const FavouritesPage = () => {
  const { favouritePokemon } = useContext(PokemonContext);

  return (
    <div className="fav__cont">
      {favouritePokemon.map((fkp, key) => {
        return <FavouritePokemonCard pokemon={fkp} key={key} />;
      })}
    </div>
  );
};

export default FavouritesPage;
