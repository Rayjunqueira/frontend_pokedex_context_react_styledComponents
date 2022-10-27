import { Route, Routes } from 'react-router-dom';

import CatchProvider from './context/Provider';
import Homepage from './pages/Homepage';
import MyPokemons from './pages/MyPokemons';
import SinglePokemon from './pages/SinglePokemon';

function App() {
  return (
    <CatchProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pokemon/:name' element={<SinglePokemon />} />
        <Route path='/mypokemons' element={<MyPokemons />} />
      </Routes>
    </CatchProvider>
  );
}

export default App;
