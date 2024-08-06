import React from "react";
import "./Card.css";
import "./Pokemon.css";

const Card = ({ Pokemondata }) => {
  const imgstyle = {
    width: "120px",
    height: "120px",
    padding: "5px",
    marginLeft: "3rem",
  };
  const textstyle = {
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <li className="Card">
        <div >  
          <figure
            style={{
              backgroundColor: "#CDFADB",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
              padding: "3px",
              
            }}
          >
            <img
              src={Pokemondata.sprites.other.dream_world.front_default}
              alt={Pokemondata.name}
              style={imgstyle}
            />
          </figure>
        </div>

        <div >
          <h1 style={textstyle}>{Pokemondata.name}</h1>

          <div className="Poketype">
            <p style={textstyle}>
              {Pokemondata.types
                .map((currtype) => currtype.type.name)
                .join(", ")}
            </p>
             </div>
            <div className=" Power grid-three-column">
              <p><span>Height: </span> <br />{Pokemondata.height}</p>
              <p><span>Weight: </span><br />{Pokemondata.weight}</p>
              <p><span>Speed: </span><br />{Pokemondata.stats[5].base_stat}</p>
            </div>
            <div className=" Power grid-three-column">
              <p><span>Experience: </span><br />{Pokemondata.base_experience}</p>
              <p><span>Ability: </span><br />{Pokemondata.abilities[0].ability.name}</p>
              <p><span>Attack: </span><br />{Pokemondata.stats[1].base_stat}</p>
            </div>

         
        </div>
      </li>
    </>
  );
};

export default Card;
