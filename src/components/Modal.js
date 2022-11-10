import React from "react";
import logo from "../images/logo.svg"

const Modal = ({ pokemon, onClick }) => {
  return (
    <div className="modal__cont">
      <div className="close" onClick={onClick}>
        X
      </div>

      <div className="inner__left">
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon.name}
          style={{ filter: "drop-shadow(2px 4px 12px black)" }}
        />
      </div>

      <div className="inner__right">
        <div className="title">
          <img src={logo} alt={pokemon.name} className="img__cont" />
          <p style={{ marginLeft: "50px", width: "60px" }}>{pokemon?.id}</p>
          <p>{pokemon?.name}</p>
        </div>
        <div className="information">
          <div
            className="info__stat"
            style={{ background: "#dbdbd9", textAlign: "center" }}
          >
            <p className="para">Type</p>
            <p className="para">Height</p>
            <p className="para">Weight</p>
          </div>

          <div className="info__sec" style={{ background: "#fff" }}>
            <p className="para">{pokemon?.types[0].type.name}</p>
            <p className="para">{pokemon?.height}0 cm</p>
            <p className="para">{pokemon?.weight} lbs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
