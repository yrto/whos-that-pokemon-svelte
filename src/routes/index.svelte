<script lang="ts">
	import { dictionary } from '../locale/locale';
	import Footer from '../components/organisms/Footer.svelte';
	import Header from '../components/organisms/Header.svelte';
	import MainMenu from '../components/organisms/MainMenu.svelte';
	import TvSet from '../components/organisms/TvSet.svelte';
</script>

<svelte:head>
	<title>{$dictionary.app.title}</title>
</svelte:head>

<main class="grid gap-8 center">
	<Header />
	<TvSet />
	<MainMenu />
	<Footer />
</main>

{#if false}<slot />{/if}

<style lang="postcss">
	main {
		@apply max-w-3xl mx-auto flex flex-col p-8 sm:p-12;
	}
</style>
