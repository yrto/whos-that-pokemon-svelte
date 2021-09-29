<button type="submit">
	<slot />
</button>

<style lang="postcss">
	button {
		@apply py-2 rounded-md bg-red-500 text-white w-full font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300;
	}
</style>
