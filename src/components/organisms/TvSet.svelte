<script lang="ts">
	import { misteryPokemon, currentGuess, showStatic, pokeFound } from '../../stores/pokeStore';
	import PokeImage from '../molecules/PokeImage.svelte';
	let poke1 = 'images/poke1.gif';
	let poke2 = 'images/poke2.gif';
	let noise = 'images/static-noise.gif';
	let tvSet = 'images/tv-set.png';
</script>

<div class="tvSet-container">
	<div class="relative">
		<img src={tvSet} alt="old tv set" class="tvSet" />
		<img
			src={noise}
			alt="static noise"
			class={`static ${$showStatic ? 'opacity-0' : 'opacity-100'}`}
		/>
		<PokeImage />
		{#if $misteryPokemon}
			<img src={poke2} alt="reveal background" class={`poke2 ${!$pokeFound && 'hidden'}`} />
		{/if}
		<img src={poke1} alt="mistery background" class="poke1" />
	</div>
</div>

<style lang="postcss">
	.tvSet-container {
		@apply w-full transform duration-300 lg:hover:rotate-1 lg:hover:scale-[1.02] filter drop-shadow-lg;
	}
	.tvSet {
		@apply absolute z-50 w-full;
	}
	.static {
		@apply absolute z-40 w-full transition duration-300;
	}
	.poke1 {
		@apply z-0 w-full;
	}
	.poke2 {
		@apply absolute z-0 w-full;
	}
</style>
