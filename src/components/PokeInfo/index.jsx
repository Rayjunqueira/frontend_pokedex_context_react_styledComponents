import * as C from './styles';

const PokeInfo = ({ name }) => {

  return (
    <C.Container>
        <C.MainInfo>
            <h2>{name}</h2>
        </C.MainInfo>
    </C.Container>
  )
}

export default PokeInfo;