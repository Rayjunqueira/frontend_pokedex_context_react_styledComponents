import * as C from './styles';

import logo from '../../assets/pokelogo.png';
import { useContext, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Pokelist from '../../components/PokeList';

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CatchContext from '../../context/Context';


const Homepage = () => {
    const api = useApi();
    const { showMyPokemons } = useContext(CatchContext);
    const navigate = useNavigate();

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
 
    useEffect (() => { 
        const getAllPokemons = async () => {
            setLoading(true);
            const myPokemons = await showMyPokemons();
            const allPokemon = await api.getAllPokemon();
            const pokemon = allPokemon.filter(pokemons => !myPokemons.includes(pokemons.name));
            setPokemonList(pokemon);
            setLoading(false); 
        }

        if (pokemonList.length === 0) {
            getAllPokemons();
        }
    }, [showMyPokemons, api]);  
  
    const lowerSearch = text.toLocaleLowerCase(); 
 
    const filteredPokemons = pokemonList.filter(pokemon => pokemon
        .name.toLowerCase().includes(lowerSearch)    
    );

    const handleHome = () => {
        navigate('/')
    }

    const handleMyPokemons = () => {
        navigate('/mypokemons')
    }


  return (
    <C.Container>
        <C.Logo>
            <img src={logo} alt="" />
        </C.Logo>
        <C.Navbar>
            <input 
                type="text" 
                placeholder='Busque um pokémon...'
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </C.Navbar>
        <C.Pokedatabase onClick={handleMyPokemons}>
            <button>Meus pokémons <i><CatchingPokemonIcon /></i></button>
        </C.Pokedatabase>
        <C.Pokelist>
            {filteredPokemons.map(pokemon => { 
                return (
                    <Pokelist 
                        name={pokemon.name}
                    />
                )
            })}
        </C.Pokelist>
    </C.Container>
  )
}

export default Homepage;