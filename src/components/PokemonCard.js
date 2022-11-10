import { useState } from "react";
import "./Styles.css";
import Modal from "./Modal";
import logo from "../images/logo.svg"

const PokemonCard = ({ pokemon, key }) => {
  const [isShow, setIsShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const HandleOpenModal = () => {
    setModalIsOpen(true);
  };

  const HandleCloseModal = () => {
    setModalIsOpen(false);
  };
  // console.log(pokemon)
  // console.log(pokemon.types[0].type.name);
  return (
    <div className="card__container">
      {isShow && (
        <div className="display">
          <div className="title">
            <img src={logo} alt={pokemon.name} className="img__cont" />
            <p style={{marginLeft: "50px", width: "60px"}}>{pokemon?.id}</p>
            <p>{pokemon?.name}</p>
          </div>
          <img src={pokemon.sprites.front_default} alt={pokemon?.name} />

          <div className="information">
            <div
              className="info__stat"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p className="para">Type</p>
              <p className="para">Height</p>
              <p className="para">Weight</p>
            </div>

            <div className="info__sec" style={{background: "#fff"}}>
              <p className="para">{pokemon?.types[0].type.name}</p>
              <p className="para">{pokemon?.height}0 cm</p>
              <p className="para">{pokemon?.weight} lbs</p>
            </div>
          </div>
        </div>
      )}
      <div
        className="right__side"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        onClick={HandleOpenModal}
      >
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          style={{ maxHeight: "50px", marginRight: "25px", width: "50px" }}
        />
        <p style={{marginRight: "5rem"}}>{pokemon.id} </p>
        <p>{pokemon.name}</p>
        {/* <img src="" alt={pokemon?.name} /> */}
      </div>
      {modalIsOpen && <Modal pokemon={pokemon} onClick={HandleCloseModal} />}
    </div>
  );
};

export default PokemonCard;
