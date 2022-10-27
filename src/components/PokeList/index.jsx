import * as C from './styles';

import { useNavigate } from 'react-router-dom';

const Pokelist = ({ name }) => {
  const navigate = useNavigate();

  const handleSinglePokemon = () => {
    navigate(`/pokemon/${name}`);
  }

  return (
    <C.Container>
        <C.List onClick={handleSinglePokemon}>
            <h2>{name}</h2>
        </C.List>
    </C.Container>
  )
}

export default Pokelist;