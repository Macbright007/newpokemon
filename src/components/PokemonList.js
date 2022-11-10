import { useContext} from "react";
import PokemonContext from "../contexts/PokemonContext"
import PokemonCard from "./PokemonCard";
import "./Styles.css"

const PokemonList = () => {
  const { pokemons, isloading} = useContext(PokemonContext)


  return (
    <main className="app__cont">
      <section className="pokemonlist__cont">
        <div className="inner__cont">
          {pokemons.map((pokemon) => {
            return (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              isloading={isloading}
            />
            )
          })}
        </div>
      </section>
    </main>
  );
};

export default PokemonList;
