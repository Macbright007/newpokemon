import "./Styles.css";
import logo from "../images/logo.svg"
import { useContext} from "react";
import PokemonContext from "../contexts/PokemonContext"


const Navbar = () => {
  const { pokemons} = useContext(PokemonContext)

  return (
    <nav className="nav__cont"> 
        <div className="cont__left">
          <p>Pokedex</p>
          <div className="seen">
            <div className="logo__cont">
              <img
                src={logo}
                alt="logo"
                style={{ width: "30px", marginRight: 10 }}
              />
              <p>{pokemons.length}</p>
            </div>
          </div>
        </div>
        <h3 style={{color: "white"}}>A -&gt; Z</h3>
    </nav>
  );
};

export default Navbar;
