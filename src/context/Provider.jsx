import React, { useEffect, useState } from "react";
import CatchContext from "./Context";


const CatchProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState(() => {
        const dataStorage = localStorage.getItem('pokemons');

        if (dataStorage) {
            return JSON.parse(dataStorage)
        } else {
            return []; 
        }
    });
    
    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }, [pokemons]);

    const verifyPokemon = async (name) => {
        if (pokemons.includes(name)) {
            return true;
        } else {
            return false;
        }
    }

    const updatePokemons = (name) => {   
        const updatedPokemons = [...pokemons]; 
        const pokemonsIndex = pokemons.indexOf(name);
        if (pokemonsIndex >= 0) { 
            updatedPokemons.slice(pokemonsIndex, 1)    
        } else { 
            updatedPokemons.push(name) 
        };
        setPokemons(updatedPokemons)  
    }     
  
    const deletePokemon = async (name) => {   
        const pokemonsArray = [...pokemons];
        const filteredPokemons = await pokemonsArray.filter(pokemon => pokemon != name);
        setPokemons(filteredPokemons);
    }  

    const showMyPokemons = async () => {
        const myPokemons = [...pokemons];
        return myPokemons;
    }

    return (
        <CatchContext.Provider value={{ pokemons: pokemons, updatePokemons: updatePokemons, deletePokemon: deletePokemon, verifyPokemon: verifyPokemon, showMyPokemons }}>
            {children}
        </CatchContext.Provider>
    );
}

export default CatchProvider;   