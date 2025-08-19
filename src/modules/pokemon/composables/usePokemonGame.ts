import { computed, onMounted, ref } from "vue";
import { GameStatus, Pokemon, PokemonListResponse } from "../interfaces";
import { PokemonApi } from "../api/PokemonApi";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const ramdomPokemon = computed(
    () => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
    });

  const isLoading = computed( () => pokemons.value.length === 0);
 

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await PokemonApi.get<PokemonListResponse>("/?limit=151");

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split("/");
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany:number = 4) => {
    gameStatus.value = GameStatus.Playing
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextOptions();
    console.log(pokemonOptions.value)
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    ramdomPokemon,
    // methods
    getNextOptions,
  };
};
