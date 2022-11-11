import "./Styles.css";
import React from "react";
import logo from "../images/logo.svg";
import { useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { favouritePokemon } = useContext(PokemonContext);

  return (
    <nav className="nav__cont">
      <div className="cont__left">
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <div className="logoSide">
            <img src={logo} alt="logo" style={{ width: "40px" }} />
            <p>Pokedex</p>
          </div>
        </Link>
        <div className="seen">
          <Link to="/favourite" style={{ textDecoration: "none" }}>
            <div className="logo__cont">
              <p style={{ fontSize: 25, marginRight: 50 }}>Favourites</p>
              <p style={{ fontSize: 25 }}>{favouritePokemon.length}</p>
            </div>
          </Link>
        </div>
      </div>
      <h3 style={{ color: "white" }}>A -&gt; Z</h3>
    </nav>
  );
};

export default Navbar;
