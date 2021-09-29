import { writable, derived } from 'svelte/store';

// what's the current game screen

type currentScreen = 'PokeGuess' | 'PokeAgain' | 'PokeRange';
const currentScreen = writable<currentScreen>('PokeGuess');

// what's the current range of pokémon

type range = {
	min: number;
	max: number;
};
const range = writable<range>({
	min: 1,
	max: 151
});

// what's the current guess

type currentGuess = string;
const currentGuess = writable<currentGuess>('');

// what's the current mistery pokémon

import type { misteryPokemonType } from '../utils/fetchPokemonData';
const misteryPokemon = writable<misteryPokemonType>();

// should show static image on tv

type showStatic = boolean;
const showStatic = derived(
	misteryPokemon,
	($a, set) => {
		setTimeout(() => set(true), 1500);
	},
	false
);

// is the mistery pokémon discovered

type pokeFound = boolean;
const pokeFound = derived(
	[currentGuess, misteryPokemon],
	([$currentGuess, $misteryPokemon], set) => {
		if ($misteryPokemon === undefined) {
			set(false);
			return;
		}
		if (
			$currentGuess === $misteryPokemon.id ||
			$currentGuess.toLowerCase() === $misteryPokemon.name.toLowerCase()
		) {
			set(true);
		}
	},
	false
);

export { currentScreen, range, currentGuess, misteryPokemon, showStatic, pokeFound };
