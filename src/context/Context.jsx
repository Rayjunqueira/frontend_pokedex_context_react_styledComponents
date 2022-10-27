import { createContext } from "react";

const CatchContext = createContext({
    pokemons: [],
    updatePokemons: (id) => null,
    deletePokemon: (id) => null,
    verifyPokemon: (id) => {},
    myPokemons: (id) => {},
});

export default CatchContext;