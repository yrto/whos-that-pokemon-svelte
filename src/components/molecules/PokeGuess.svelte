<script lang="ts">
	import { onMount } from 'svelte';
	import { currentGuess, misteryPokemon, range } from '../../stores/pokeStore';
	import { dictionary } from '../../locale/locale';
	import { fetchMisteryPokemon } from '../../utils/fetchPokemonData';
	import Button from '../atoms/Button.svelte';
	import Input from '../atoms/Input.svelte';

	const randomIntFromInterval = (range: { min: number; max: number }) => {
		return Math.floor(Math.random() * (range.max - range.min + 1) + range.min);
	};

	onMount(async () => {
		const randomNumber = randomIntFromInterval($range);
		$misteryPokemon = await fetchMisteryPokemon(randomNumber);
		console.log($misteryPokemon);
	});

	let inputValue = '';

	const handleSubmit = (e: Event) => {
		console.log(e.target);
		$currentGuess = inputValue;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<Input
		label={$dictionary.mainMenu.guessLabel}
		placeholder={$dictionary.mainMenu.guessInput}
		bind:value={inputValue}
	/>
	<Button>{$dictionary.mainMenu.guessButton}</Button>
</form>

<style lang="postcss">
	form {
		@apply text-center grid gap-2;
	}
</style>
