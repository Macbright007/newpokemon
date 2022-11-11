import React from "react";
import logo from "../images/logo.svg";
import PokemonProgressBar from "./PokemonProgressBar";
import "./Styles.css";

const Modal = ({ pokemon, onClick }) => {
  const getBmiValue = (weight, height) => {
    return (height * 10000) / weight ** 2;
  };

  const BMI = getBmiValue(pokemon.weight, pokemon.height);

  return (
    <div className="modal__cont">
      <div className="close" onClick={onClick}>
        X
      </div>

      <div className="inner__left">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{ filter: "drop-shadow(2px 4px 12px black)",
        width: "150%" }}
        />
      </div>

      <div className="inner__right">
        <div className="title">
          <img src={logo} alt={pokemon.name} className="img__cont" />
          <p style={{ marginLeft: "50px", width: "60px" }}>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>

        <div className="stat__wrapper">
          <h1>Base stats</h1>
          <div className="feature__cont">
            <div className="features">
              <p>Type</p>
              <h3>{pokemon.types[0].type.name}</h3>
            </div>
            <div className="features">
              <p>Height</p>
              <h3>{pokemon.height}0 cm</h3>
            </div>
            <div className="features">
              <p>Weight</p>
              <h3>{pokemon.weight} lbs</h3>
            </div>
            <div className="features">
              <p>BMI</p>
              <h3>{BMI.toFixed(1)}</h3>
            </div>
          </div>
          <PokemonProgressBar pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
