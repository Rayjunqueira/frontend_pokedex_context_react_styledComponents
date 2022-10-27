import * as C from './styles';

import { useContext, useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';

import PokeInfo from '../../components/PokeInfo';
 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import CatchContext from '../../context/Context';
 
const SinglePokemon = () => {
    const api = useApi();
    const { updatePokemons, deletePokemon, verifyPokemon } = useContext(CatchContext);
    const { name } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [imgDatabase, setImgDatabase] = useState('');
    const [infoPokemon, setInfoPokemon] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]); 

    const [isCatch, setIsCatch] = useState(false);

    useEffect(() => {  
        const singlePokemon = async () => {
            const pokemon = await api.getPokemon(name);  
            setLoading(true); 
            setImgDatabase(pokemon.sprites); 
            setInfoPokemon(pokemon); 
            setPokemonTypes(pokemon.types);  
            setLoading(false); 
        }  
        verifyIsCatch();    
        singlePokemon();    
    }, [infoPokemon]);  
   

    const verifyIsCatch = async () => {
      if (infoPokemon.name) {
        const isVerify = await verifyPokemon(infoPokemon.name);
        if (isVerify) {
          setIsCatch(true);
        } else {
          setIsCatch(false); 
        }
      }
    }

    const handleHompage = () => {
      navigate('/');
    }
   
    const handleMyPokemon = () => {
      navigate('/mypokemons');
    }
   

    const handleCatchAdd = async () => {    
      if (isCatch === false) {
        updatePokemons(infoPokemon.name)
        setIsCatch(true);
      } 
    }

    const handleCatchRemove = async () => { 
      if (isCatch === true) {
        deletePokemon(infoPokemon.name);
        setIsCatch(false);
      }
    }
 
  return (
    <C.Container>
      <PokeInfo 
        name={infoPokemon.name}
      /> 
      <C.Card>
        <C.Info>
          <C.Imgs>
            <img src={imgDatabase.front_default} alt="" />
            <img src={imgDatabase.back_default} alt="" />
          </C.Imgs>
          <h2 id='types'>Tipos</h2>
          {pokemonTypes.map(type => {
            return (
              <C.Types>
                <h2>{type.type.name}</h2>
              </C.Types>
            )
          })}
          {isCatch ?  (
            <DoNotDisturbOnIcon id='iconCatched' onClick={handleCatchRemove}/>
          ): <AddCircleOutlineIcon  id='icon' onClick={handleCatchAdd}/>}
        </C.Info>
      </C.Card>
      <C.Return>
        <button onClick={handleHompage}>Retornar a Pokédex</button>
      </C.Return>
      <C.Return>
        <button onClick={handleMyPokemon}>Meus Pokemons</button>
      </C.Return>
    </C.Container>
  )
}

export default SinglePokemon;  