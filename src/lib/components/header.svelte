<script>
	import { page } from '$app/stores';
	import ThemeSelector from '$lib/components/themeSelector.svelte';
	import { onMount } from 'svelte';

	let onHome = true;
	let path = $page.url.pathname

	$: {
		onHome = path === "/"
	}
</script>

<header>
	<a class="subtitle" href="/">{onHome ? 'SvelteKit Experiments' : '< Back'}</a>
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
