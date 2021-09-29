<script lang="ts">
	// export let type: 'text' | 'email' | 'password' = 'text';
	export let placeholder: string;
	export let label: string = 'input field';
	export let value: string = '';
</script>

{#if label !== 'input field'}
	<label for={label}>
		{label}
	</label>
{/if}
<input name={label} {placeholder} bind:value />

<style lang="postcss">
	label {
		@apply text-gray-700 font-medium text-sm mb-2;
	}
	input {
		@apply p-2 rounded-md border border-gray-300 text-center shadow-inner  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400;
	}
</style>
