<script lang="ts">
	import { dictionaries, dictionary, locale } from '../../locale/locale';
	const handleChange = (event: Event) => {
		console.log((event.target as HTMLOptionElement).value);
		return ($locale = (event.target as HTMLOptionElement).value);
	};
</script>

<div>
	<label for="select locale">{$dictionary.footer.localeSelect}</label>
	<select name="select locale" role="listbox" on:change={handleChange}>
		{#each dictionaries as dict}
			<option value={dict.id}>{dict.name}</option>
		{/each}
	</select>
</div>

<style lang="postcss">
	div {
		@apply p-2 flex flex-col text-center text-sm space-y-2;
	}
	label {
		@apply text-gray-700 font-medium;
	}
	select {
		@apply px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400;
	}
</style>
