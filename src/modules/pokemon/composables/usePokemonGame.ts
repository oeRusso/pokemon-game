import { ref, Ref } from "vue"

export const usePokemonGame = () => {

    const gameStatus = ref<'playing'| 'won' | 'lost'>('won')

    return{
        
    }
}