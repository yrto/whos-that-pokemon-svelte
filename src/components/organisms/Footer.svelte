<script>
	import LocaleSelector from '../molecules/LocaleSelector.svelte';
</script>

<footer>
	<a href="https://github.com/yrto/whos-that-pokemon-svelte">GitHub</a>
	<LocaleSelector />
</footer>

<style lang="postcss">
	a {
		@apply text-red-800 text-center text-sm mb-4;
	}
	footer {
		@apply flex flex-col items-center;
	}
</style>
