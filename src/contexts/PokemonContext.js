import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const API_url = "https://pokeapi.co/api/v2/pokemon/";

const PokemonContext = createContext();

  
  // function to get pokemon from localStorage
  // const getPokemonsFromStorage = () => {
  //   const favPokemons = localStorage.getItem("favPokemons");
  //   const parsedPokemons = favPokemons ? JSON.parse(favPokemons) : favPokemons;
  //   return Array.isArray(parsedPokemons) ? parsedPokemons : [];
  // };

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  // const [favouritePokemon, setFavouritePokemon] = useState(getPokemonsFromStorage())
  const [isloading, setIsLoading] = useState(false);
  // const [pageNum, SetPageNum] = useState(1);


  const fetchPokemons = async () => {
    setIsLoading(true);
    const res = await axios.get(`${API_url}?offset=${offset}&limit=${limit}`);
    offset+=20;
    getAllPokemons(res.data.results);
  };

  const getAllPokemons = async (res) => {
    res.map(async (item) => {
      const results = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, results.data];
        // state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state;
        // return state.sort((a,b) =>  a.id - b.id);
      });
      setIsLoading(false);
    });
  };

  // function to add pokemon to favourite page
  // const addToFavorite = (pokemon) => {
  //   setFavouritePokemon((prevState) => [...prevState, pokemon]);
   
  // };

  // useEffect(() => {
  //   localStorage.setItem(
  //     "favPokemons",
  //     JSON.stringify(favouritePokemon)
  //   );
  // }, [favouritePokemon])

  // function to remove pokemon from favourite page
  // const removeFromFavourite = (pokemonId) => {
  //   setFavouritePokemon(favouritePokemon.filter(fav => fav.id !== pokemonId))
  // };

  let offset = 0;
  const limit = 20;

  useEffect(() => {
    fetchPokemons();
  }, []);

  //function to handle scroll
  // const handleScroll = (morecontent) => {
    // const currentPages = morecontent[0];
    // if (currentPages.isIntersecting) {
    //   SetPageNum((pageNum) => pageNum + 1);
    // }
  //   fetchPokemons();
  // };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        isloading,
        // addToFavorite,
        // removeFromFavourite,
        // favouritePokemon,
        // handleScroll
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
