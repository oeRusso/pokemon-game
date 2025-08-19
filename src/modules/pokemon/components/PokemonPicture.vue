<template name="component-name">
    <section>
        <img 
        :src="pokemonImage" alt=""
        class="brightness-0"
        />

        
        
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface props {
    pokemonId: number;
}	

const props = defineProps <props>();

const pokemonId = props.pokemonId;
const pokemonImage = computed(
    () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
);

</script>
<style scoped>
img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag:none;
    -webkit-user-select:none;
}

</style>