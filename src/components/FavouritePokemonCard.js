import React from "react";
import { useState, useEffect } from "react";
import { ColorExtractor } from "image-color-extraction";
import "./Styles.css";
import Modal from "./Modal";
import logo from "../images/logo.svg";

const FavouritePokemonCard = ({ pokemon, key }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgColor, setImgColor] = useState({});

  const extractor = new ColorExtractor();

  useEffect(() => {
    extractor.extractColor(pokemon.sprites.front_default).then(() => {
      setImgColor(`${extractor.chooseReadableColor()[1]}6b`);
    });
  }, []);

  const HandleOpenModal = () => {
    setModalIsOpen(true);
  };

  const HandleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card__wrapper" onClick={HandleOpenModal}>
      <div className="card__cont">
        <div className="card__display">
          <div className="card__title">
            <img
              src={logo}
              alt={pokemon.name}
              className="img__cont"
              style={{width: "30px" }}
            />
            <p style={{ marginLeft: "25px", width: "60px" }}>{pokemon.id}</p>
            <p>{pokemon.name}</p>
          </div>

          <div
            className="imageCard__cont"
            style={{
              backgroundColor: imgColor,
            }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>

          <div className="card__information">
            <div
              className="cardInfo__stat"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p className="para">Type</p>
              <p className="para">Height</p>
              <p className="para">Weight</p>
            </div>

            <div className="info__sec" style={{ background: "#fff" }}>
              <p className="para">{pokemon.types[0].type.name}</p>
              <p className="para">{pokemon.height}0 cm</p>
              <p className="para">{pokemon.weight} lbs</p>
            </div>
          </div>
        </div>
        {modalIsOpen && <Modal pokemon={pokemon} onClick={HandleCloseModal} />}
      </div>
    </div>
  );
};

export default FavouritePokemonCard;
