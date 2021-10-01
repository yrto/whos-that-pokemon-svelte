<script>
	import '../app.postcss';
</script>

<div style="background-image: url(images/bg.png)">
	<slot />
</div>

<style lang="postcss">
	div {
		@apply min-h-screen bg-top bg-no-repeat bg-cover;
	}
</style>
