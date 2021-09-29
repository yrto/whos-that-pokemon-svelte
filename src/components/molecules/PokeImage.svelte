<script lang="ts">
	import { misteryPokemon, pokeFound } from '../../stores/pokeStore';
</script>

<div class="poke-container">
	{#if $misteryPokemon}
		<img
			src={$misteryPokemon.img}
			alt="who's that pokémon?"
			class={`poke-image ${!$pokeFound && 'brightness-0'}`}
		/>
		{#if $pokeFound}
			<p class="poke-name-position poke-name-extras">
				<span class="poke-number">
					N°{$misteryPokemon.id}
				</span>
				<br />
				{$misteryPokemon.name}!
			</p>
		{/if}
	{/if}
</div>

<style lang="postcss">
	.poke-container {
		@apply absolute flex w-full h-full z-10;
	}
	.poke-image {
		@apply w-1/3 self-center filter transition duration-300 ml-[9%] mb-[5%];
	}
	.poke-number {
		@apply text-sm sm:text-xl md:text-2xl;
	}
	.poke-name-position {
		@apply self-center text-center uppercase leading-3 text-lg sm:text-2xl md:text-3xl;
	}
	.poke-name-extras {
		margin-left: 1%;
		margin-bottom: 12%;
		width: 33%;
		font-family: 'Luckiest Guy', cursive;
		font-weight: 700;
		color: white;
		text-shadow: -2px 2px 2px hsla(0, 0%, 0%, 0.33);
		letter-spacing: 2px;
		transform: rotate(15deg);
	}
</style>
