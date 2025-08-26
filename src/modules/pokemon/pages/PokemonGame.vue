<template>
    <section v-if="isLoading || ramdomPokemon.id === null"
        class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>

    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">Quien en este pokemon?</h1>
        <div class="h-20">
            <button @click="getNextRound(4)" 
             class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 transition-all"
             v-if="gameStatus === GameStatus.Lost">¿Jugar de nuevo?
            </button>
        </div>
        

        <!-- pokemon picture -->
        <PokemonPicture :pokemon-id="ramdomPokemon.id" :show-pokemon="gameStatus === GameStatus.Playing" />
        <!-- pokemon options -->
        <PokemonOptions :options="options" :block-selection="gameStatus !== GameStatus.Playing"
            :correct-answer="ramdomPokemon.id" @selected-option="checkAnswer" />


    </section>
</template>


<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';


const {ramdomPokemon, isLoading, gameStatus, pokemonOptions:options, checkAnswer, getNextRound} = usePokemonGame()

const onSelectedOption = (value: number) => {
    console.log({value});
     }
</script>

<!-- TODO: RECORRER LA MILLA EXTRA PONIENDOLE CONTADOR EN PANTALLA DE CUANTAS PERDUIDAS Y VICTORIAS -->