<template name="component-name">
    <section class="mt-5 flex flex-col">
     <button  v-for="{name,id} in options" 
              :key="id" 
              @click="$emit('selectedOption', id)" 
              :class="['capitalize disabled:shadow-none disabled:bg-gray-100',
              {
                  correct: id === correctAnswer && blockSelection,
                  incorrect: id !== correctAnswer && blockSelection,
              }]" 
              :disabled="blockSelection">
        <!-- bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100 -->
        {{ name }}
     </button>
    </section>
   
</template>

<script setup lang="ts">
import { Pokemon } from '../interfaces';

    interface props {
        options:Pokemon[],
        blockSelection: boolean,
        correctAnswer: number,
       
    }

defineProps<props>();

defineEmits<{
    selectedOption : [id:number];
}>();

</script>

<style scoped>
 button{
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;
    padding: 0.75rem;
    margin: 0.5rem;
    cursor: pointer;
    width: 10rem;
    text-align: center;
    transition: all 0.15s ease-in-out;
 }

 button:hover {
    background-color: #f3f4f6;
 }

 .correct{
    background-color: #3b82f6; /* bg-blue-500 */
    color: white;
 }

 .incorrect{
    background-color: #fef2f2; /* bg-red-100 */
    opacity: 0.7;
 }
</style>

<!-- TODO: FIJARSE PQ EL POKEMON APARECE Y DEBE ESTAR EN NEGRO -->