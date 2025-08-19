import axios, { Axios } from "axios";

const PokemonApi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})

export {PokemonApi}