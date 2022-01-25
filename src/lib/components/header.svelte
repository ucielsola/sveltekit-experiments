<script>
	import ThemeSelector from '$lib/components/themeSelector.svelte';
</script>

<header>
	<a class="subtitle" href="/">SvelteKit Experiments</a>
	<ThemeSelector />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 1.5rem;
		padding-block: 0.5rem;
		border-bottom: 1px solid var(--highlight);
		height: 6rem;
	}
</style>
