import * as C from './styles';

import logo from '../../assets/pokelogo.png';
import { useContext, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Pokelist from '../../components/PokeList';

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CatchContext from '../../context/Context';


const MyPokemons = () => {
    const api = useApi();
    const navigate = useNavigate();
    const { showMyPokemons } = useContext(CatchContext);

    const [myPokemons, setMyPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');

    useEffect (() => {
        const getMyPokemons = async () => {
            const myPokemon = await showMyPokemons();
            setLoading(true);
            setMyPokemons(myPokemon);
            setLoading(false);
            console.log(myPokemons);
        }
        getMyPokemons();
    }, [])

    const lowerSearch = text.toLocaleLowerCase();

    const filteredMyPokemons = myPokemons.filter(pokemon => pokemon
        .toLowerCase().includes(lowerSearch)    
    );

    const handleHome = () => {
        navigate('/');
    }

  return (
    <C.Container>
        <C.Logo>
            <img src={logo} alt="" />
        </C.Logo>
        <C.Navbar>
            <input 
                type="text" 
                placeholder='Busque um dos seus pokémons...'
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        </C.Navbar>
        <C.Return>
            <button onClick={handleHome}>Voltar</button>
        </C.Return>
        <C.Pokelist>
            {filteredMyPokemons.map(pokemon => { 
                return (
                    <Pokelist 
                        name={pokemon}
                    />
                )
            })}
        </C.Pokelist>
    </C.Container>
  )
}

export default MyPokemons;