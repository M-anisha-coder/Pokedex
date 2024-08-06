import React, { useEffect ,useState } from "react";
import "../index.css";
import "./Pokemon.css";
import "./Card.css";
import Card from "./Card"
export const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=50";
  const [Pokemon,setPokemon]=useState([]);
  const [Loading,setLoading] =useState(true);
  const [Error,setError] =useState(null);
  const [Search,setSearch] =useState("");

  const fetchPokemon = async () => {
    try {
     
      const res = await fetch(API);
      const data = await res.json();
      //Fetch details of Particular Pokemon
      const Pokemondetails = data.results.map(async (currPokemon) => {
        try {
          const Dres = await fetch(currPokemon.url);
          const Ddata = await Dres.json();
          return Ddata;
        } catch (error) {
          console.log(error);
        }
      });
      //Till here
      const detailedResponse = await Promise.all(Pokemondetails); // detailedResponse this will give Exact data
      console.log(detailedResponse);
      setPokemon(detailedResponse);  //set pokemon
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);



  const pokefilter = Pokemon.filter((currPokemon)=>
    currPokemon.name.toLowerCase().includes(Search.toLowerCase())

  );


  if (Loading){
    return<>
    <div>Loading......</div>
    </>
  }
  if(Error){
    return <>
    <div>{Error.message}</div>
    </>
  }
  return (
    <>
    <section>
      <header>
      <h1 className="Heading">Lets Catch Pokemon</h1>
      <div>
        <input className="searchHeading" type="text" placeholder="Search Pokemon" value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        {console.log(Search)}
      </div>
      <div>
        <ul className="grid grid-three-column">
          {
              pokefilter.map((currPokemon)=>{
                return <Card key ={currPokemon.id} Pokemondata ={currPokemon}/> ;             
              })
          }
        </ul>
      </div>
      </header>
    </section>
     
    </>
  );
};
