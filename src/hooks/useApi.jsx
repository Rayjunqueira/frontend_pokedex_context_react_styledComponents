import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});
 

export const useApi = () => ({
    getAllPokemon: async () => {
        const response = await api.get('/pokemon?limit=1000');
        return response.data.results;
    },
    getPokemon: async (name) => {
        const response = await api.get(`/pokemon/${name}`); 
        return response.data;
    }
});