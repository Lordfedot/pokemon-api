import axios from "axios";
const BASE_URL = 'https://pokeapi.co/api/v2'
export const fetchPokemons = async (page) => {
    const offSet = page * 12
    try {
        const {data} = await axios(`${BASE_URL}/pokemon/?offset=${offSet}&limit=12`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchPokemonByName =async (name) => {
    try {
        const {data} = await axios(`${BASE_URL}/pokemon/${name}`)
        return data
    } catch (error) {
        console.log(error);
    }
}