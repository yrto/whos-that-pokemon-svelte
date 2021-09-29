export type misteryPokemonType = {
	id: string;
	name: string;
	img: string;
};

export const fetchMisteryPokemon = async (pokemonId: number): Promise<misteryPokemonType> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
	const rawPokemonData = await response.json();
	const pokemonData = {
		id: `${rawPokemonData.id}`,
		name: rawPokemonData.name,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rawPokemonData.id}.png`
	};
	return pokemonData;
};
